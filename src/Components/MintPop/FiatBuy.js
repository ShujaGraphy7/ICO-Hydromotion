import { BiCoin } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { useEffect, useState } from "react";
import Presale from "../ABIs/Presale.json";
import { toast, Toaster } from "react-hot-toast";
import { ethers } from "ethers";

import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

const privateKey = process.env.REACT_APP_ADMIN_PRIVATEkEY;
const NODE_URL = process.env.REACT_APP_NODE_URL;
const presaleAddress = process.env.REACT_APP_PRESALE_ADDRESS;

function FiatBuy(props) {
  const currency = "EUR";
  const style = { layout: "vertical", shape: "pill", tagline: "false" };

  // ----------------------------------------------------------------------
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
      // eslint-disable-next-line
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function () {
              // Your code here after capture the order
              buy();
            });
          }}
        />
      </>
    );
  };
  // ----------------------------------------------------------------------
  // const account = getAccount();
  const provider = new ethers.providers.JsonRpcProvider(NODE_URL);

  const signer = new ethers.Wallet(privateKey, provider);

  const Contract_Inst = new ethers.Contract(presaleAddress, Presale, signer);

  // console.log(Contract_Inst);

  const [tokenAmount, setTokenAmount] = useState("");
  const [currentPriceOf1, setCurrentPriceOf1] = useState("0");
  const [totalPrice, setTotalPrice] = useState("");
  const [AccountAddress, setAccountAddress] = useState("");

  const tokenInputHandeler = (e) => {
    setTokenAmount(e.target.value);
  };

  const accountAddressHandeler = (e) => {
    setAccountAddress(e.target.value);
  };

  // mint Handeling Functions
  useEffect(() => {
    getcurrentPrice();
    GetTotalPrice();
    // eslint-disable-next-line
  }, [tokenAmount]);

  const getcurrentPrice = async () => {
    setCurrentPriceOf1(props.currentPrice);
  };

  const GetTotalPrice = () => {
    setTotalPrice(currentPriceOf1 * tokenAmount);
  };
  const amount = totalPrice;

  const buy = async () => {
    await Contract_Inst?.fiatBuy(
      (tokenAmount * 10**2).toString(),
      AccountAddress
    ).then((res) => {
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
              <button
                type="button"
                onClick={props.cancel}
                className="rounded-full bg-lime-700 text-2xl p-2 font-semibold text-lime-100 shadow-sm ring-1 ring-inset hover:bg-lime-800 absolute  right-5"
              >
                <MdClose />
              </button>
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
                    Token kaufen mit EUR
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                    Sind Sie sicher, dass Sie mit Ihrem Konto kaufen möchten?
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                Aktueller Prive von 1: <b>{currentPriceOf1}</b>
                </p>
              </div>
              <div className="sm:col-span-2 my-5">
                {AccountAddress.length === 42 ? (
                  <input
                    type="text"
                    onChange={accountAddressHandeler}
                    className="bg-[#ffffffdc] border placeholder-lime-600 border-lime-800 text-lime-900 text-sm rounded-lg focus:ring-lime-600 focus:border-lime-600 block w-full p-2.5"
                    placeholder="Empfangene Wallet-Adresse eingeben"
                  />
                ) : (
                  <input
                    type="text"
                    onChange={accountAddressHandeler}
                    className="bg-[#ffffffdc] border placeholder-red-600 border-red-800 text-red-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                    placeholder="Empfangene Wallet-Adresse eingeben"
                  />
                )}
              </div>
              <div className="sm:col-span-2 my-5">
                {tokenAmount === "0" ||
                (tokenAmount > 999 && tokenAmount < 50000000001) ? (
                  <input
                    type="number"
                    min={10}
                    max={50000000000}
                    id="Tokens"
                    onChange={tokenInputHandeler}
                    className="bg-[#ffffffdc] border placeholder-lime-600 border-lime-800 text-lime-900 text-sm rounded-lg focus:ring-lime-600 focus:border-lime-600 block w-full p-2.5"
                    placeholder="Token-Betrag eingeben (min 1000)"
                  />
                ) : (
                  <input
                    type="number"
                    min={10}
                    max={50000000000}
                    id="Tokens"
                    onChange={tokenInputHandeler}
                    className="bg-[#ffffffdc] border placeholder-red-600 border-red-800 text-red-900 text-sm rounded-lg focus:ring-red-600 focus:border-red-600 block w-full p-2.5"
                    placeholder="Token-Betrag eingeben (min 1000)"
                  />
                )}
              </div>

              <div className="sm:col-span-2 mt-5">
                <p className="text-sm text-lime-900">
                Gesamtpreis: <b>{parseFloat(totalPrice).toFixed(2)} EUR</b>
                </p>
              </div>
            </div>
            <hr className="border-1/2 border-lime-700" />
            <div className="px-4 py-3 sm:flex-row-reverse sm:px-6 items-center">
              {tokenAmount > 999 &&
              tokenAmount < 50000000001 &&
              AccountAddress.length === 42
                ? <div className="mx-0 sm:ml-5 mt-0 sm:mt-1">
                <PayPalScriptProvider
                  options={{
                    "client-id": "AdcEeOR6r_sYfKd_kxYUdW2SrAl8rhAOdKLYI0CpKYE2nDvMIWLJO9Mvbj6ZyUm3gEa5_vdCVoC94N3P",
                    components: "buttons",
                    currency: "EUR",
                  }}
                >
                  <ButtonWrapper currency={currency} showSpinner={false} />
                </PayPalScriptProvider>
              </div>
                : <p className="text-xs">Geben Sie die korrekten Eingaben ein, um mit der Zahlung fortzufahren</p>}
              
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-right" />
    </div>
  );
}

export default FiatBuy;