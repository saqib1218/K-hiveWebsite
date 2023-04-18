import { Grid, Link, Paper, Typography, useMediaQuery } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import myImage from "./CareerOpportunities.png";
import Textarea from "@mui/joy/Textarea";
import DescriptionIcon from "@mui/icons-material/Description";
import CustomDialog from "../../DialogBox/Dialogbox";

const Careers = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [showPaper, setShowPaper] = useState(true);
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState<string | Blob | null>(null);
  const [showDialog, setShowDialog] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPhone, setErrorPhone] = useState("");
  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // handle form submission here
    // Make axios post request to the server
    // Reset error messages

    setErrorEmail("");
    setErrorPhone("");

    // Validation
    let isValid = true;
    if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;

      setErrorEmail("Enter a valid Email");
    }
    if (!/^\d+$/.test(phone)) {
      isValid = false;

      setErrorPhone("Enter a valid Phone Number");
    }

    console.log({selectedFile});
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("subject", subject);
    formData.append("message", message);
    selectedFile && formData.append("resume", selectedFile);
  if(isValid){ try {
      const response = await axios.post("/job-form", formData,  {
        headers: {
          "content-type": "multipart/form-data",
        }
      });

      // Handle response as needed
      console.log(response.data);

      // Reset form fields
      setName("");
      setEmail("");
      setPhone("");
      setSubject("");
      setMessage("");
      setShowDialog(true);
    } catch (error) {
      console.error(error);
    }
  }
  };

  const fonts = useMediaQuery("(max-width:1470px)");
  const margint = useMediaQuery("(max-width:1470px)");
  const marginb = useMediaQuery("(max-width:1470px)");
  const widtht = useMediaQuery("max-width:1470px");
  const textdecor = useMediaQuery("(max-width:1000px)");
  const handleBrowseClick = () => {
    // Trigger file input click event
    const fileInput = document.getElementById("fileInput") as HTMLInputElement;
    fileInput.click();
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Handle file input change event
    const file = e.target.files && e.target.files[0];
    console.log({file})
    // Check if selected file is a PNG file
    if (file && file.type === "application/pdf") {
      // Process the file
      console.log("Selected file:", file);
      setFileName(file.name);
      setSelectedFile(file);
      console.log({selectedFile})
    } else {
      // Show error message or take appropriate action
      console.error("Please select a PDF file.");
    }
  };

  const handleResize = () => {
    setShowPaper(!fonts);
  };

  window.addEventListener("resize", handleResize);
  const handleDeleteClick = () => {
    // Clear the selected file state
    setFileName("");
    setSelectedFile(null);
  };

  return (
    <>
      <div
        style={{
          position: "relative",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={myImage}
          alt="My Image"
          style={{ maxWidth: "-webkit-fill-available", minHeight: "200px" }}
        />
        <div
          style={{
            position: "absolute",
            top: "40%",
          }}
        >
          <Typography
            style={{
              color: "#FFFF",
              fontSize: fonts ? "30px" : "60px",
              fontWeight: 600,
              font: "Archivo",
            }}
          >
            Career Opportunities
          </Typography>
        </div>
      </div>
      <Grid container>
        <div
          style={{
            marginTop: fonts ? "56px" : "110px",
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Grid
            item
            xl={7}
            xs={11}
            md={11}
            sm={11}
            lg={8}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center ",
            }}
          >
            <Typography
              style={{ fontWeight: 600, font: "Archivo", fontSize: "36px" }}
            >
              We Are Hiring
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                font: "Archivo",
                fontSize: "16px",
                color: "#C22522",
                marginBottom: "32px",
              }}
            >
              Transforming your vision into a viable digital solution.
            </Typography>
            <Typography
              style={{ fontWeight: 400, font: "Archivo", fontSize: "16px" }}
            >
              Kryptohive is a renowned company thaWelcome to K-Hive, where we
              specialize in creating cutting-edge applications for both Web 2.0
              and Web 3.0 technology. Our team of software developers is
              dedicated to pushing the limits of what's possible in the digital
              realm and delivering world-class software solutions to our
              clients.As a software developer in our company, you will have the
              opportunity to work on a wide range of projects, from developing
              dynamic e-commerce websites and social media platforms to creating
              decentralized applications (dApps) on the blockchain. You will
              work alongside other developers and designers to build
              user-centric, scalable, and secure software solutions that meet
              our clients' needs and exceed their expectations.t specializes in
              providing advanced information technology solutions to clients
              worldwide. Our team of experts is dedicated to developing
              innovative and creative products and services that cater to the
              unique needs of our clients. Our wide range of services includes
              web design and development, tailor-made applications, ERPs, CRMs,
              e-commerce solutions, business-to-business applications,
              business-to-client applications, managed hosting, and internet
              portal management.
            </Typography>
            <Typography
              style={{
                fontWeight: 400,
                font: "Archivo",
                fontSize: "16px",
                marginTop: "16px",
              }}
            >
              To thrive in this role, you must have a deep understanding of
              programming languages such as HTML, CSS, JavaScript, and back-end
              languages like PHP, Ruby on Rails, or Python. You should also be
              familiar with web development frameworks such as React, Vue.js, or
              Angular. Additionally, experience with blockchain development and
              smart contract languages like Solidity or Rust would be a plus.
            </Typography>
          </Grid>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: margint ? "30px" : "56px",
            marginBottom: marginb ? "50px" : "110px",
          }}
        >
          <Grid item xl={7} lg={8} md={11} sm={11} xs={11}>
            <Paper
              style={{
                borderRadius: "10px",
                backgroundColor: "#F8FAFC",
                boxShadow: "none",
                border: "2px solid #E2E8F0",
              }}
            >
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  padding: 24,
                }}
              >
                <Typography
                  style={{
                    font: "Archivo",
                    fontWeight: 600,
                    fontSize: 24,
                    textAlign: "center",
                    marginBottom: "24px",
                  }}
                >
                  Job Form
                </Typography>
                <div>
                  <div style={{ display: textdecor ? "initial" : "flex" }}>
                    <TextField
                      style={{
                        marginBottom: 24,
                        backgroundColor: "#FFFF",
                        marginRight: "24px",
                        width: "100%",
                      }}
                      label="Your name"
                      variant="outlined"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    <TextField
                     error={errorEmail !== ""}
                      style={{
                        marginBottom: 24,
                        backgroundColor: "#FFFF",
                        width: "100%",
                      }}
                      label="Email"
                      variant="outlined"
                      value={email}
                      helperText={errorEmail ? errorEmail : null}
                      FormHelperTextProps={{ style: { marginBottom:-20   } }}
                      onChange={(e) => {
                        setErrorEmail("");
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  <div style={{ display: textdecor ? "initial" : "flex" }}>
                    <TextField
                      error={errorPhone !== ""}
                      style={{
                        
                        marginBottom: 24,
                        backgroundColor: "#FFFF",
                        marginRight: "24px",
                        width: "100%",
                      }}
                      label="Phone Number"
                      variant="outlined"
                      helperText={errorPhone ? errorPhone : null}
                      FormHelperTextProps={{ style: { marginBottom:-20 } }}
                      value={phone}
                      onChange={(e) => {
                        setErrorPhone("");
                        setPhone(e.target.value);
                      }}
                    />
                    <TextField
                      style={{
                        marginBottom: 24,
                        backgroundColor: "#FFFF",
                        width: "100%",
                      }}
                      label="Subject"
                      variant="outlined"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                    />
                  </div>
                  <Textarea
                    minRows={4}
                    placeholder="Lets us now what you are looking for"
                    variant="outlined"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    sx={{ borderRadius: 5, marginBottom: 3 }}
                  />

                  {showPaper ? (
                    <Paper
                      style={{
                        // paddingBottom:24,
                        backgroundColor: "#FFFF",
                        width: "100%",
                        // height: 157,
                        marginBottom: 24,
                        boxShadow: "none",
                        border: "2px dashed #E2E8F0",
                      }}
                    >
                      {fileName ? (
                        // Render file name and delete icon if available
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "16px",
                          }}
                        >
                          <p
                            style={{
                              font: "Archivo",
                              fontWeight: 600,
                              fontSize: "16px",
                              lineHeight: "100%",
                              color: "#475569",
                              // alignItems: "center",
                              marginTop: 8,
                            }}
                          >
                            {fileName}
                          </p>
                          <div style={{ display: "flex" }}>
                            <BorderColorIcon
                              onClick={handleBrowseClick}
                              style={{ marginRight: 20 }}
                            ></BorderColorIcon>
                            <DeleteIcon
                              onClick={handleDeleteClick}
                              color="error"
                            ></DeleteIcon>
                          </div>
                        </div>
                      ) : (
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "24px",
                          }}
                        >
                          <DescriptionIcon
                            style={{
                              color: "#C22522",
                              border: "1px solid #E2E8F0",
                              fontSize: "60px",
                              padding: 10,
                              borderRadius: "30px",
                            }}
                          />
                          <Typography
                            style={{
                              font: "Archivo",
                              fontWeight: 600,
                              fontSize: "12px",
                              lineHeight: "100%",
                              color: "#475569",
                              alignItems: "center",
                              marginTop: 8,
                            }}
                          >
                            Upload Resume
                          </Typography>
                          <Typography
                            style={{
                              font: "Archivo",
                              fontWeight: 400,
                              fontSize: "14px",
                              lineHeight: "100%",
                              marginTop: "8px",
                              color: "#475569",
                            }}
                          >
                            Drop jpg.&nbsp;{" "}
                            <Link
                              style={{
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "100%",
                                color: "Red",
                              }}
                              onClick={handleBrowseClick}
                            >
                              {" "}
                              Browse
                            </Link>{" "}
                          </Typography>

                          <input
                            type="file"
                            id="fileInput"
                            accept=".pdf"
                            style={{ display: "none" }}
                            onChange={handleFileInputChange}
                          />
                        </div>
                      )}
                    </Paper>
                  ) : (
                    <>
                      {fileName ? (
                        <Paper
                          style={{
                            // paddingBottom:24,
                            backgroundColor: "#FFFF",
                            width: "100%",
                            // height: 157,
                            marginBottom: 24,
                            boxShadow: "none",
                            border: "2px dashed #E2E8F0",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              padding: "12px",
                            }}
                          >
                            <p
                              style={{
                                font: "Archivo",
                                fontWeight: 600,
                                fontSize: "16px",
                                lineHeight: "100%",
                                color: "#475569",
                              }}
                            >
                              {fileName}
                            </p>
                            <div style={{ display: "flex" }}>
                              <BorderColorIcon
                                onClick={handleBrowseClick}
                                style={{ marginRight: 20 }}
                              ></BorderColorIcon>
                              <DeleteIcon
                                onClick={handleDeleteClick}
                                color="error"
                              ></DeleteIcon>
                            </div>
                          </div>
                        </Paper>
                      ) : (
                        <Button
                          onClick={handleBrowseClick}
                          variant="outlined"
                          color="error"
                          fullWidth
                          style={{
                            marginBottom: "16px",
                          }}
                        >
                          Upload Resume
                        </Button>
                      )}

                      {/* Render file input element */}
                      <input
                        type="file"
                        id="fileInput"
                        accept=".pdf"
                        style={{ display: "none" }}
                        onChange={handleFileInputChange}
                      />
                    </>
                  )}
                </div>
                <div style={{ display: "flex", justifyContent: "center" }}>
                {" "}
                  <CustomDialog
                    title="Thank You for Applying"
                    content=" We appreciate your interest in joining our team. Our HR department will review your application and contact you if there is a good fit. Please keep an eye on your email and don't hesitate to reach out if you have any questions. We wish you all the best in your job search.s "
                    setOpen={setShowDialog}
                    open={showDialog}
                  />
              </div>
                <Button
                  type="submit"
                  variant="contained"
                  color="error"
                  style={{ borderRadius: 8 }}
                >
                  Submit
                </Button>
              </form>
            </Paper>
          </Grid>
        </div>
      </Grid>
    </>
  );
};

export default Careers;
