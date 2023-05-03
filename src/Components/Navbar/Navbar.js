import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import "flowbite";
import { FaBars } from "react-icons/fa";
function Navbar() {
  return (
    <nav className="bg-white flex items-center justify-end px-2 sticky sm:px-4 overflow-hidden py-2.5 dark:bg-gray-900 w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <div>
          <svg
            width="60"
            height="60"
            viewBox="0 0 887 578"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M209.976 7.33979C157.253 46.7676 60.9756 142.586 36.6771 179.263C9.16926 220.984 0.458463 251.701 0 307.175C0 348.436 1.37539 359.44 11.4616 384.197C36.6771 446.089 80.6895 490.56 138.914 513.483C190.262 533.656 270.952 530.446 319.549 505.689C354.392 488.268 398.404 443.338 416.743 407.12C434.165 372.276 435.998 365.858 441.5 307.175C448.835 230.153 480.011 179.722 540.987 149.005C638.639 99.0324 753.713 153.131 787.64 264.538C803.686 317.261 787.181 379.153 743.169 429.126C734.916 438.295 712.91 452.966 690.446 463.511C653.31 481.849 651.018 482.308 612.048 480.474C566.66 478.64 531.359 464.886 500.642 436.92L483.22 420.874L466.715 433.252C447.46 448.381 446.543 454.8 462.589 467.178C474.051 475.889 474.051 477.265 469.466 499.729C462.589 531.363 462.131 529.529 484.137 542.366L503.393 554.286L522.19 535.948C539.611 518.985 541.903 518.068 560.242 520.819C579.039 524.028 579.497 524.486 586.833 550.619L594.168 577.668H618.467C640.932 577.668 642.765 576.751 647.35 563.456C650.101 555.203 652.393 544.2 652.393 538.24C652.393 525.862 653.768 524.486 678.525 520.36C695.947 517.609 698.698 518.526 714.744 533.656C724.372 542.825 733.541 550.16 735.833 550.16C737.667 550.16 746.378 546.034 755.089 540.532C773.427 529.988 774.803 523.569 765.175 496.062C758.757 478.181 758.757 477.723 773.886 463.052C788.098 449.298 789.932 448.84 806.437 453.424C837.612 462.135 842.655 460.301 854.575 437.378L865.578 416.747L846.323 399.784C826.609 382.821 826.609 382.821 831.652 363.107C836.695 344.769 838.071 343.393 861.452 336.516L886.209 329.639V304.882C886.209 280.125 886.209 280.125 869.246 275.541C859.618 272.79 848.615 270.498 844.489 270.498C839.905 270.498 835.32 265.455 833.944 257.661C832.111 250.784 829.818 242.073 828.443 237.947C827.068 233.362 832.569 224.193 842.655 215.024C860.535 197.602 861.911 190.725 850.908 167.343C842.655 149.463 839.905 149.005 810.104 156.34C789.932 161.383 789.015 161.383 774.344 147.171L758.757 132.042L765.175 111.411C774.344 82.0693 773.886 81.6108 750.963 69.2323L729.873 58.2292L710.618 77.0262C691.821 95.3647 690.904 95.8232 672.565 91.2386C654.685 86.6539 653.768 85.2785 647.35 60.5215L640.473 34.3891L618.467 33.0137C592.793 31.1799 590.042 33.0137 586.374 55.4784C582.707 81.1524 579.039 87.1124 565.744 89.8632C559.325 91.2386 550.614 93.5309 546.488 94.4478C542.82 95.3647 532.734 88.9462 524.023 80.2354C515.313 71.5246 504.768 64.1892 500.642 64.1892C487.805 64.1892 458.922 82.9862 461.672 89.8632C463.048 93.0724 466.257 104.534 469.008 115.079C474.051 133.417 473.592 134.793 458.463 150.839C424.078 187.057 401.155 236.113 397.488 279.208C392.903 337.433 389.694 355.772 378.691 379.153C360.811 417.206 335.595 442.421 295.709 461.677C262.699 478.181 258.573 479.098 216.853 479.098C178.801 479.098 170.09 477.265 148.084 466.261C102.237 443.338 66.4772 402.077 51.8063 354.855C32.5509 292.504 44.0125 246.658 92.6096 186.14C122.868 148.546 211.352 64.1892 220.521 64.1892C224.188 64.1892 256.281 93.0724 291.583 128.374L356.226 192.559L371.355 180.639C379.607 174.22 386.484 165.968 386.484 162.3C386.484 151.756 230.607 -0.912542 220.521 0.0043844C220.062 0.0043844 215.019 3.21363 209.976 7.33979Z"
              fill="url(#paint0_linear_4_3)"
            />
            <path
              d="M104.53 319.554C109.573 348.437 127.911 383.28 144.416 395.659C161.837 409.413 193.93 421.791 210.435 421.791C220.521 421.791 221.438 419.957 221.438 398.868C221.438 376.403 221.438 376.403 204.933 373.194C183.844 369.068 159.087 344.769 152.668 320.929L147.625 302.591H124.702H101.32L104.53 319.554Z"
              fill="url(#paint1_linear_4_3)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_4_3"
                x1="633.383"
                y1="299.046"
                x2="282.099"
                y2="299.046"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#215215" />
                <stop offset="1" stopColor="#5F923E" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_4_3"
                x1="187.169"
                y1="364.298"
                x2="139.556"
                y2="364.298"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#5E913D" />
                <stop offset="1" stopColor="#5F923E" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex md:order-2">
          <div className="hidden md:block">
            <ConnectButton
              label="Wallet verbinden"
              accountStatus={{
                smallScreen: "avatar",
                largeScreen: "full",
              }}
              showBalance={{
                smallScreen: false,
                largeScreen: true,
              }}
              chainStatus={"icon"}
            />
          </div>
        </div>
        <div
          className="items-center justify-end hidden md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#Home"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Startseite
              </a>
            </li>
            <li>
              <a
                href="#About"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
              >
                Über
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:hidden xs:block mr-20 min-w-fit">
        <ConnectButton
          label="Wallet verbinden"
          accountStatus={{
            smallScreen: "avatar",
            largeScreen: "full",
          }}
          showBalance={{
            smallScreen: false,
            largeScreen: true,
          }}
          chainStatus={"icon"}
        />
      </div>

      {/* Mobile View */}

      <div className="fixed md:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md px-4 py-2 text-2xl font-medium text-lime-600 hover:text-lime-700 ">
              <FaBars />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#Home"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Startseite
                    </a>
                  )}
                </Menu.Item>

                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="#About"
                      className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-lime-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >
                      Über
                    </a>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  );
}

export default Navbar;
