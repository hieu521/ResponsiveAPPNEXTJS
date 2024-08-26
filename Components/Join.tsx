import { Button, TextField } from "@mui/material";

function Join() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative p-[2px] rounded-2xl bg-gradient-to-b from-black to-white">
        <div className="bg-[#7f1d1d] rounded-2xl p-4 py-5">
          <h3 className="text-2xl font-bold text-white text-center mb-4">
            Join the Club!
          </h3>
          <form className="m-0 flex flex-col max-w-xs items-center justify-center gap-5">
            <TextField
              className=" h-14 w-10/12 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
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
              className=" h-14  w-10/12 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
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
              className=" h-14  w-10/12 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
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
              className="w-9/12 h-14 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]"
              startIcon={<img width="22px" height="22px" src="/icsent.png" />}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "20px",
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
  );
}

export default Join;
