import {
  EditOutlined,
  DeleteOutlined,
  AttachFileOutlined,
  GifBoxOutlined,
  ImageOutlined,
  MicOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Typography,
  TextField,
  InputBase,
  useTheme,
  Button,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import FlexBetween from "components/FlexBetween";
import Dropzone from "react-dropzone";
import UserImage from "components/UserImage";
import WidgetWrapper from "components/WidgetWrapper";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "state";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const MyPostWidget = ({ picturePath }) => {
  const dispatch = useDispatch();
  const [isImage, setIsImage] = useState(false);
  const [image, setImage] = useState(null);
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [diff, setDiff] = useState("");
  const [sub, setSub] = useState("");
  const [precau, setPrecau] = useState("");
  const { palette } = useTheme();
  const { _id } = useSelector((state) => state.user);
  const token = useSelector((state) => state.token);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const mediumMain = palette.neutral.mediumMain;
  const medium = palette.neutral.medium;

  const [materialsList, setMaterialsList] = useState([]);
  const [newMaterial, setNewMaterial] = useState({ name: "", quantity: "" });
  const [showAddNewMaterial, setShowAddNewMaterial] = useState(false);

  const handleMaterialChange = (index, event) => {
    const { name, value } = event.target;
    const updatedMaterials = [...materialsList];
    updatedMaterials[index][name] = value;
    setMaterialsList(updatedMaterials);
  };

  const handleNewMaterialChange = (event) => {
    const { name, value } = event.target;
    setNewMaterial((prevMaterial) => ({
      ...prevMaterial,
      [name]: value,
    }));
  };

  const handleAddMaterial = () => {
    console.log(materialsList);
    if (newMaterial.name && newMaterial.quantity) {
      setMaterialsList((prevMaterials) => [...prevMaterials, newMaterial]);
      setNewMaterial({ name: "", quantity: "" });
    }
  };

  const toggleAddNewMaterial = () => {
    setShowAddNewMaterial(!showAddNewMaterial);
    setNewMaterial({ name: "", quantity: "" });
  };

  const [instructions, setInstructions] = useState([]);
  const [newInstruction, setNewInstruction] = useState({ description: "" });
  const [showAddNewInstruction, setShowAddNewInstruction] = useState(false);

  const handleInstructionChange = (index, event) => {
    const { value } = event.target;
    const updatedInstructions = [...instructions];
    updatedInstructions[index].description = value;
    setInstructions(updatedInstructions);
  };

  const handleNewInstructionChange = (event) => {
    const { value } = event.target;
    setNewInstruction((prevInstruction) => ({
      ...prevInstruction,
      description: value,
    }));
  };

  const handleAddInstruction = () => {
    console.log(instructions);
    if (newInstruction.description) {
      setInstructions((prevInstructions) => [
        ...prevInstructions,
        { ...newInstruction },
      ]);
      setNewInstruction({ description: "" });
    }
  };

  const toggleAddNewInstruction = () => {
    setShowAddNewInstruction(!showAddNewInstruction);
    setNewInstruction({ description: "" });
  };

  console.log(instructions, materialsList);

  const handlePost = async () => {
    console.log(instructions, materialsList);

    const formData = new FormData();
    formData.append("userId", _id);
    formData.append("expName", title);
    formData.append("description", post);
    if (image) {
      formData.append("picture", image);
      formData.append("picturePath", image.name);
    }
    formData.append("difficulty", diff);
    formData.append("subject", sub);
    formData.append("precautions", precau);
    formData.append("materials_list", JSON.stringify(materialsList));
    formData.append("instructions", JSON.stringify(instructions));

    try {
      const response = await fetch(`http://localhost:3001/posts`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const posts = await response.json();
      dispatch(setPosts({ posts }));
    } catch (error) {
      console.log(error);
    }

    setImage(null);
    setPost("");
    setTitle("");
    setDiff("");
    setSub("");
    setPrecau("");
    setInstructions([]);
    setMaterialsList([]);
  };

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <h2>Add New Experiment</h2>
      </AccordionSummary>
      <AccordionDetails>
        <Box
          display="grid"
          gap="30px"
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          sx={{
            "& > div": {
              gridColumn: isNonMobileScreens ? undefined : "span 4",
            },
          }}
        >
          <TextField
            value={title}
            label="Experiment Name"
            onChange={(e) => setTitle(e.target.value)}
            name="Experiment Name"
            sx={{ gridColumn: "span 3" }}
          />
          <InputBase
            placeholder="Experiment Description"
            onChange={(e) => setPost(e.target.value)}
            value={post}
            sx={{
              gridColumn: "span 2",
              backgroundColor: palette.neutral.light,
              borderRadius: "1rem",
              padding: "1rem 2rem",
            }}
          />
          <FlexBetween
            sx={{
              gridColumn: "span 2",
            }}
          >
            <FlexBetween gap="0.2 5rem" onClick={() => setIsImage(!isImage)}>
              <ImageOutlined sx={{ color: mediumMain }} />
              <Typography
                color={mediumMain}
                sx={{ "&:hover": { cursor: "pointer", color: medium } }}
              >
                Image
              </Typography>
            </FlexBetween>
            {isImage && (
              <FlexBetween gap="0.2rem 5rem">
                <Box borderRadius="5px">
                  <Dropzone
                    acceptedFiles=".jpg,.jpeg,.png"
                    sx={{ margin: null }}
                    multiple={false}
                    onDrop={(acceptedFiles) => setImage(acceptedFiles[0])}
                  >
                    {({ getRootProps, getInputProps }) => (
                      <FlexBetween>
                        <Box
                          {...getRootProps()}
                          border={`2px dashed ${palette.primary.main}`}
                          borderRadius="5px"
                          p="1rem"
                          width="100%"
                          sx={{ "&:hover": { cursor: "pointer" } }}
                        >
                          <input {...getInputProps()} />
                          {!image ? (
                            <p>Add Image Here</p>
                          ) : (
                            <FlexBetween>
                              <Typography>{image.name}</Typography>
                              <EditOutlined />
                            </FlexBetween>
                          )}
                        </Box>
                        {image && (
                          <IconButton
                            onClick={() => setImage(null)}
                            sx={{ width: "15%" }}
                          >
                            <DeleteOutlined />
                          </IconButton>
                        )}
                      </FlexBetween>
                    )}
                  </Dropzone>
                </Box>
              </FlexBetween>
            )}
          </FlexBetween>
          <TextField
            value={diff}
            label="diffficulty"
            onChange={(e) => setDiff(e.target.value)}
            name="diffficulty"
            sx={{ gridColumn: "span 1" }}
          />
          <TextField
            value={sub}
            label="subject"
            onChange={(e) => setSub(e.target.value)}
            name="subject"
            sx={{ gridColumn: "span 1" }}
          />
          <InputBase
            placeholder="precautions"
            onChange={(e) => setPrecau(e.target.value)}
            value={precau}
            sx={{
              gridColumn: "span 2",
              backgroundColor: palette.neutral.light,
              borderRadius: "1rem",
              padding: "1rem 2rem",
            }}
          />
        </Box>
        <div>
          <form>
            {/* Other input fields */}
            <div>
              <h3>Materials List</h3>
              {materialsList.map((material, index) => (
                <div key={index}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobileScreens ? undefined : "span 2",
                      },
                      marginBottom: "5px", // Adding margin bottom
                    }}
                  >
                    <InputBase
                      type="text"
                      name="name"
                      value={material.name}
                      onChange={(event) => handleMaterialChange(index, event)}
                      placeholder="Material Name"
                      sx={{
                        gridColumn: "span 1",
                        backgroundColor: palette.neutral.light,
                        borderRadius: "1rem",
                        padding: "1rem 1rem",
                      }}
                    />
                    <InputBase
                      type="text"
                      name="quantity"
                      value={material.quantity}
                      onChange={(event) => handleMaterialChange(index, event)}
                      placeholder="Material Quantity"
                      sx={{
                        gridColumn: "span 1",
                        backgroundColor: palette.neutral.light,
                        borderRadius: "1rem",
                        padding: "1rem 1rem",
                      }}
                    />
                  </Box>
                </div>
              ))}
              {showAddNewMaterial && (
                <div>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobileScreens ? undefined : "span 2",
                      },
                      marginBottom: "5px", // Adding margin bottom
                    }}
                  >
                    <TextField
                      type="text"
                      name="name"
                      value={newMaterial.name}
                      onChange={handleNewMaterialChange}
                      placeholder="Material Name"
                      sx={{ gridColumn: "span 1" }}
                    />
                    <TextField
                      type="text"
                      name="quantity"
                      value={newMaterial.quantity}
                      onChange={handleNewMaterialChange}
                      placeholder="Material Quantity"
                      sx={{ gridColumn: "span 1" }}
                    />
                  </Box>
                  <Button variant="text" onClick={handleAddMaterial}>
                    Add Material
                  </Button>
                </div>
              )}
              <Button variant="outlined" onClick={toggleAddNewMaterial}>
                {showAddNewMaterial ? "Hide" : "Add New Material"}
              </Button>
            </div>
          </form>
          <form>
            {/* Other input fields */}
            <div>
              <h3>Instructions</h3>
              {instructions.map((instruction, index) => (
                <div key={index}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobileScreens ? undefined : "span 2",
                      },
                      marginBottom: "5px", // Adding margin bottom
                    }}
                  >
                    <InputBase
                      type="text"
                      value={instruction.description}
                      onChange={(event) =>
                        handleInstructionChange(index, event)
                      }
                      placeholder={`Step ${index + 1}`}
                      sx={{
                        gridColumn: "span 1",
                        backgroundColor: palette.neutral.light,
                        borderRadius: "1rem",
                        padding: "1rem 1rem",
                      }}
                    />
                  </Box>
                </div>
              ))}
              {showAddNewInstruction && (
                <div>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobileScreens ? undefined : "span 2",
                      },
                      marginBottom: "5px", // Adding margin bottom
                    }}
                  >
                    <TextField
                      type="text"
                      value={newInstruction.description}
                      onChange={handleNewInstructionChange}
                      placeholder={`Step ${instructions.length + 1}`}
                      sx={{ gridColumn: "span 1" }}
                    />
                  </Box>
                  <Button variant="text" onClick={handleAddInstruction}>
                    Add Instruction
                  </Button>
                </div>
              )}
              <Button variant="outlined" onClick={toggleAddNewInstruction}>
                {showAddNewInstruction ? "Hide" : "Add New Instruction"}
              </Button>
            </div>
          </form>
        </div>
        <Box
          display="flex"
          justifyContent="center" // Horizontally center the content
        >
          <Button variant="outlined" onClick={handlePost}>
            Submit
          </Button>
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};

export default MyPostWidget;
