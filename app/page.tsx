import Deposit from "@/Components/Deposit";
import Enyoy from "@/Components/Enyoy";
import Join from "@/Components/Join";
import Loop from "@/Components/Loop";
import Play from "@/Components/Play";
import Quick from "@/Components/Quick";

import { Button, TextField } from "@mui/material";

export default function Home() {
  return (
    <>
      <div
        className=" lg:flex flex-col bg-cover bg-center lg:pt-40 xs:p-0"
        style={{
          backgroundImage: `url('/background.png')`,
        }}
      >
        <div className="xs:block lg:hidden text-right mr-3 pt-3">
          <Button
            className="shadow-lg"
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "linear-gradient(180deg, #ff0000, #831414)",
              borderRadius: "15px",
              "&:hover": {
                background: "linear-gradient(180deg, #ff0000, #831414)",
              },
            }}
          >
            DOWNLOAD
          </Button>
        </div>
        <div className="lg:flex justify-evenly lg:m-0 xs:mx-10">
          {/* Section: Introduction */}
          <div>
            <div className="lg:mt-12 xs:m-0 xxs:mx-4">
              <h1
                className="smd:text-4xl xxs:text-center font-extrabold lg:my-5 xs:m-0 xs:text-center lg:text-left xxs:text-2xl xs:text-3xl"
                style={{
                  textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
                }}
              >
                Welcome to AceLounge Club!
              </h1>
              <h2
                className="text-2xl xxs:text-center md:text-3xl md:text-center lg:text-left font-bold my-5"
                style={{
                  textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
                }}
              >
                Join us for the Grand Inauguration!
              </h2>
              <p
                className="lg:block xxs:hidden xs:hidden my-5"
                style={{
                  textShadow: "4px 4px 8px rgba(0, 0, 0, 0.7)",
                }}
              >
                We thrilled to announce the launch of AceLounge, your ultimate
                destination for thrilling poker action
              </p>

              {/* Launch Info */}
              <div className="lg:flex lg:bg-black/70 xs:bg-black/70 xxs:bg-black/70 border-collapse border smd:border-none xs:border-white/50 xs:border-2 xxs:border-white/50 xxs:border-2 md:border-white/50 md:border-2">
                <div className="p-2 flex-grow space-y-1 ">
                  <div className="flex items-center space-x-1">
                    <div className="uppercase text-lg text-white font-bold">
                      <p className="md:text-3xl lg:text-xl">Launch Date</p>
                    </div>
                    <div className="text-red-500">
                      <img className="w-5" src="/icrocket.png" alt="anh" />
                    </div>
                  </div>
                  <hr className="border-red-600 bg-red w-full" />

                  <div className="space-y-1 bg-opacity-50">
                    <div className="flex items-center space-x-2 flex-wrap">
                      <div className="text-lg">
                        <img className="w-5" src="/icrank.png" alt="anh" />
                      </div>
                      <div className="text-sm font-bold text-white">
                        <p className="md:text-3xl lg:text-xl xxs:text-xs ">
                          Tournament:
                        </p>
                      </div>
                      <div className="font-bold text-yellow-400">
                        <p className="md:text-3xl lg:text-xl xxs:text-sx text-yellow-400">
                          Grand Inauguration Freeroll
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="text-lg">
                        <img className="w-5" src="/cup.png" alt="" />
                      </div>
                      <div className="text-sm font-bold text-white">
                        <p className="md:text-3xl lg:text-xl"> Prize Pool:</p>
                      </div>
                      <div className="font-bold text-yellow-400">
                        <img className="w-52" src="/10000.png" alt="khong" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="xs:flex xxs:flex">
                  <div
                    className="lg:w-24 lg:h-44 w-full xs:h-48 xxs:h-44 md:flex xs:flex lg:flex-col bg-gradient-to-b from-red-600 to-red-900 text-center text-white p-2 justify-center items-center"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255, 0, 0, 0.9) 0%, rgba(131, 20, 20, 0.9) 100%)",
                    }}
                  >
                    <div
                      className="lg:w-24 xxs:w-full xxs: lg:h-44 smd:flex md:w-full xs:w-full xs:h-48 xxs:h-44 bg-gradient-to-b from-red-600 to-red-900 text-center text-white p-2 flex smd:flex-col justify-center items-center"
                     
                    >
                      <div className="md:text-4xl  lg:text-4xl xs:text-4xl xxs:text-2xl xs:m-3 lg:m-0 font-pathway-gothic-one uppercase md:mr-3">
                        20
                      </div>
                      <div className="md:text-3xl lg:text-xl xs:text-3xl  uppercase">
                        jun
                      </div>
                    </div>
                  </div>
                  <div
                    className="lg:w-24 w-full lg:h-44 xs:h-48 xxs:h-44 bg-gradient-to-b from-red-600 to-red-900 text-center text-white p-2 flex flex-col justify-center items-center"
                    style={{
                      background:
                        "linear-gradient(to bottom, rgba(131, 20, 20, 0.9), rgba(0, 0, 0, 0.9))",
                    }}
                  >
                    <div className="lg:text-xl md :text-3xl xs:text-3xl xxs:mt-3 smd:m-0 lg:m-0 xl:m-0 md:m-0">
                      2:00pm
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Join Form */}
          <div className="xs:bg-black xxs:hidden xxs:bg-black lg:bg-inherit xs:rounded-2xl xs:hidden  box-border lg:block">
            <div className=" xs:rounded-2xl lg:bg-black/70 lg:rounded-lg max-w-md mx-auto mt-10 xs:hidden lg:block">
              <h3 className="text-2xl font-bold text-white text-center mb-4">
                Join the Club!
              </h3>
              <form className="m-0   flex flex-col items-center box-border justify-center py-2.5 px-[18px] gap-5">
                <TextField
                  className="[border:none]   bg-[transparent]  h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] font-palanquin-dark text-xl text-rosybrown"
                  placeholder="Full Name"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <img width="23px" height="23px" src="/iconperson.png" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "56px",
                      backgroundColor: "#fff",
                      paddingLeft: "20px",
                      borderRadius: "10px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "10px",
                      color: "#C3A7A7",
                    },
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent]  h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] font-palanquin-dark text-xl text-rosybrown"
                  placeholder="Email"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <img width="23px" height="23px" src="/icemail.png" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "56px",
                      backgroundColor: "#fff",
                      paddingLeft: "20px",
                      borderRadius: "10px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "10px",
                      color: "#C3A7A7",
                    },
                  }}
                />
                <TextField
                  className="[border:none] bg-[transparent]  h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] font-palanquin-dark text-xl text-rosybrown"
                  placeholder="Phone"
                  variant="outlined"
                  InputProps={{
                    startAdornment: (
                      <img width="22px" height="22px" src="/icphone.png" />
                    ),
                  }}
                  sx={{
                    "& fieldset": { border: "none" },
                    "& .MuiInputBase-root": {
                      height: "56px",
                      backgroundColor: "#fff",
                      paddingLeft: "20px",
                      borderRadius: "10px",
                      fontSize: "20px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "10px",
                      color: "#C3A7A7",
                    },
                  }}
                />
                <Button
                  className="w-[231px] h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
                  startIcon={
                    <img width="22px" height="22px" src="/icsent.png" />
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
                    width: 231,
                  }}
                >
                  JOIN NOW!
                </Button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly">
          <div
            id="content"
            className="flex flex-col md:flex-row justify-center items-center gap-14 mt-8 pb-8 smd:my-7 xxs:mx-8 xxs:justify-center xxs:gap-2 xl:gap-16 md:gap-16 lg:my-12 xs:mx-4 "
          >
            <a href="#" className="flex-shrink-0 ">
              <img
                src="/gg.png"
                alt="Google Play"
                className="xl:h-24 xs:h-12 xxs:h-14  md:h-10 smd:h-16 smd:w-48 "
              />
            </a>
            <a href="#" className="flex-shrink-0">
              <img
                src="/icandroi.png"
                alt="App Store"
                className="xl:h-24 xs:h-12 xxs:h-14  md:h-10 smd:h-16 smd:w-48 "
              />
            </a>
            <a href="#" className="flex-shrink-0">
              <img
                src="/icms.png"
                alt="App Store"
                className="xl:h-24 xs:h-12 xxs:h-14  md:h-10 smd:h-16 smd:w-48 "
              />
            </a>
            <a href="#" className="flex-shrink-0">
              <img
                src="/icappstore.png"
                alt="Download for Android"
                className="xl:h-24 xs:h-12 xxs:h-14  md:h-10 smd:h-16 smd:w-48 "
              />
            </a>
          </div>
        </div>

        {/* Download Section */}
      </div>
      <div className="w-full h-fit lg:hidden xs:block xxs:block xxs:p-8  bg-gradient-to-b from-[#000000] to-[#450505] py-14">
        <Join />
      </div>
      <div className="w-full h-fit bg-gradient-to-r to-[#E70404] from-[#850202]  xs:px-4">
        <Play />
      </div>
      <div className="bg-gradient-to-b from-[#000000] to-[#450505]  space-y-6 lg:space-y-0 lg:space-x-6">
        <Enyoy />
      </div>
      <div className=" w-full h-fit bg-gradient-to-r from-[#850202] to-[#e60404]">
        <Deposit />
      </div>
      <div className=" w-full h-fit relative lg:flex xs:flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#450505]">
        <Quick />
      </div>
      <div className="box-border h-max relative lg:flex xs:flex-col items-center justify-center bg-gradient-to-r from-[#850202] to-[#e60404]">
        <Loop />
      </div>
    </>
  );
}
