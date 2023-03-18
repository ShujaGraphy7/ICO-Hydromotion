import { BiCoin } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useProvider, useSigner } from "wagmi";
import Presale from "../ABIs/Presale.json";
import { ethers } from "ethers";
import { toast, Toaster } from "react-hot-toast";

const presaleAddress = process.env.REACT_APP_PRESALE_ADDRESS;
function ETHbuy(props) {
  const provider = useProvider();
  const { data: signer, isError } = useSigner();
  let contract;
  if (signer) {
    contract = new ethers.Contract(presaleAddress, Presale, signer);
  }
  const [tokenAmount, setTokenAmount] = useState("");
  const [AccountAddress, setAccountAddress] = useState("");
  const [currentPriceOf1, setCurrentPriceOf1] = useState("0");
  const [totalPrice, setTotalPrice] = useState("");

  const tokenInputHandeler = (e) => {
    setTokenAmount(e.target.value);
  };

  const accountAddressHandeler = (e) => {
    setAccountAddress(e.target.value);
  };

  // mint Handeling Functions

  useEffect(() => {
    getcurrentPrice();
    constGetTotalPrice();
  }, [tokenAmount, currentPriceOf1]);

  const getcurrentPrice = async () => {
    //  console.log(await contract.CurrentPrice())
    await contract?.CurrentPrice().then((res) => {
      let _res = parseFloat(res);

      setCurrentPriceOf1(_res);
    });
  };

  const constGetTotalPrice = () => {
    setTotalPrice(currentPriceOf1 * tokenAmount);
  };

  const buy = async () => {
    await contract
      ?.buy((tokenAmount * 100).toString(), {
        value: ethers.utils.parseEther(
          ((currentPriceOf1 * tokenAmount) / 10 ** 18).toString()
        ),
      })
      .then((res) => {
        toast
          .promise(res.wait(), {
            loading: "Transfering " + tokenAmount + " tokens...",
            success:
              tokenAmount + " Successfully Transfered To Your Account.. :)",
            error: "Transfering Failed Try Again Later.. :(",
          })
          .then(() => {
            setTimeout(() => {
              props.cancel();
            }, 2000);
          });
      });
  };

  // -------------------------------------------------- //
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-gray-300 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 backdrop-blur-lg">
          <div className="relative transform overflow-hidden rounded-lg bg-[#ffffff53] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mx-auto grid h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#86a3152d] sm:mx-0 sm:h-10 sm:w-10">
                  <div>
                    <BiCoin className="h-6 w-6 text-lime-600" />
                  </div>
                </div>

                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3
                    className="text-base font-semibold leading-6 text-gray-900"
                    id="modal-title"
                  >
                    Buy Tokens with ETH
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Are you sure you want to buy your account?
                    </p>
                  </div>
                </div>
              </div>

              {/* <div className="sm:col-span-2 my-5">
                {AccountAddress.length == 42 ?(
                
                  <input
                    type="text"
                    onChange={accountAddressHandeler}
                    className="bg-[#ffffffdc] border placeholder-lime-600 border-lime-800 text-lime-900 text-sm rounded-lg focus:ring-lime-600 focus:border-lime-600 block w-full p-2.5"
                    placeholder="Enter Account Address"
                  />
                ) : (
                  <input
                    type="text"
                    onChange={accountAddressHandeler}
                    className="bg-[#ffffffdc] border placeholder-red-600 border-red-800 text-red-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                    placeholder="Enter Account Address"
                  />
                )}
              </div> */}

              <div className="sm:col-span-2 my-5">
                {tokenAmount == 0 ||
                (tokenAmount > 9 && tokenAmount < 50000000001) ? (
                  <input
                    type="number"
                    min={10}
                    max={50000000000}
                    id="Tokens"
                    onChange={tokenInputHandeler}
                    className="bg-[#ffffffdc] border placeholder-lime-600 border-lime-800 text-lime-900 text-sm rounded-lg focus:ring-lime-600 focus:border-lime-600 block w-full p-2.5"
                    placeholder="Enter Token Amount"
                  />
                ) : (
                  <input
                    type="number"
                    min={10}
                    max={50000000000}
                    id="Tokens"
                    onChange={tokenInputHandeler}
                    className="bg-[#ffffffdc] border placeholder-red-600 border-red-800 text-red-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                    placeholder="Enter Token Amount"
                  />
                )}
              </div>

              <div className="sm:col-span-2 mt-5">
                <p className="text-sm text-lime-900">
                  {tokenAmount < 9 ? (
                    <span>
                      total Price:{" "}
                      <b>
                        {(
                          ethers.utils.formatEther(currentPriceOf1.toString()) *
                          tokenAmount
                        ).toFixed(12)}{" "}
                        ETH
                      </b>
                    </span>
                  ) : (
                    <span>
                      total Price:{" "}
                      <b>
                        {ethers.utils.formatEther(currentPriceOf1.toString()) *
                          tokenAmount}{" "}
                        ETH
                      </b>
                    </span>
                  )}
                </p>
              </div>
            </div>
            <hr className="border-1/2 border-lime-700" />
            <div className="px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              {tokenAmount > 9 && tokenAmount < 50000000001 ? (
                <button
                  onClick={buy}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-lime-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 sm:ml-3 sm:w-auto"
                >
                  Buy
                </button>
              ) : (
                <button
                  disabled={true}
                  type="button"
                  className="inline-flex w-full justify-center rounded-md bg-[#64a30d62] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-lime-500 sm:ml-3 sm:w-auto"
                >
                  Buy
                </button>
              )}

              <button
                type="button"
                onClick={props.cancel}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default ETHbuy;
