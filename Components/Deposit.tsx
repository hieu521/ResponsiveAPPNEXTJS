import { Button } from "@mui/material";
import "./image.css"; 
function Deposit() {
  return (
    <div className=" bg-red-600 py-5 flex justify-center items-center">
      <div className="bg-red-500 rounded-lg  flex xs:flex-col xxs:flex-col lg:flex-row items-center space-y-6 lg:space-y-0 lg:space-x-6">
      <div className="relative mx-auto">
  <img
    src="/vi.png"
    alt="Wallet Icon"
    className="w-full h-auto max-w-full max-h-full smd:w-96 smd:h-96 xxs:w-60 xxs:h-56"
  />

  <img
    src="/coin.png"
    alt="Coins Icon"
    className="
      w-32 
      h-auto 
      max-w-full 
      max-h-full 
      object-cover 
      absolute 
      left-[70%] 
      top-[25%]   
      lg:hidden
      smd:hidden 
      xs:block
      xs:w-24  /* Smaller width for extra small screens */
      xs:left-[60%]  /* Adjust left position for extra small screens */
      xs:top-[40%]   /* Adjust top position for extra small screens */
      md:w-24  /* Smaller width for extra small screens */
      md:left-[60%]  /* Adjust left position for extra small screens */
      md:top-[40%] 
      md:block
      xss:hidden
    "
  />
</div>



        <div className="text-center space-y-4">
          <h1
            className="text-white text-3xl font-bold"
            style={{
              textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
            }}
          >
            Quick Deposit
          </h1>

          <div>
            <label className="text-white text-lg mb-2 block text-left">
              Choose Payment Method:
            </label>
            <div className="relative w-full inline-block text-white">
              <div className="flex bg-gradient-to-r from-[#601414] to-[#9A0000] appearance-none w-full text-lg py-2 rounded-r-full rounded-bl-full shadow-lg">
                <button className="w-full text-left pl-2 flex items-center">
                  <img
                    src="/icbit.png"
                    alt="Bitcoin Icon"
                    className="w-6 h-6 mr-2"
                  />
                  <span>Bitcoin</span>
                </button>
                <span className="mr-5 mt-1">
                  <img className="w-7" src="/down.png" alt="khong" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <Button
              className="w-[200px] h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              startIcon={
                <img width="22px" height="22px" src="/requestmoney.png" />
              }
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "20",
                background: "linear-gradient(180deg, #14FF00, #215104)",
                borderRadius: "10px",
                "&:hover": {
                  background: "linear-gradient(180deg, #14FF00, #215104)",
                },
                width: 210,
              }}
            >
              Deposit
            </Button>
          </div>

          <p className="text-white text-sm">
            We will credit the exact amount we receive in US Dollars.
          </p>
          <p className="text-white text-sm">
            Need assistance? Contact us via Live Chat for instant support.
          </p>
        </div>
        <div className="lg:block xs:hidden xxs:hidden">
          <img
            src="/tele.png"
            alt="Telegram Icon"
            className="w-96 h-96 lg:block xs:hidden"
          />
        </div>
      </div>
    </div>
  );
}

export default Deposit;
