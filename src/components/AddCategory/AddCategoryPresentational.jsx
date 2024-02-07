import { Gif } from "../Gif/Gif";
import { Box, Input } from "@mui/material";

export const AddCategoryPresentational = ({
  values,
  handleChange,
  handleSubmit,
  categories,
  clearCategories,
}) => {
  return (
    <>
      <Box
        component={"form"}
        onSubmit={handleSubmit}
        sx={{ display: "flex", justifyContent: "center", marginY: 5 }}
      >
        <Input
          onChange={handleChange}
          name="category"
          value={values.category}
          placeholder="Busque sus gifs..."
          sx={{ width: 500, fontSize: 22 }}
        />
        <Box
          component={"button"}
          sx={{
            backgroundColor: "black",
            border: 0,
            color: "white",
            padding: 2,
            fontSize: 22,
            ":hover": { backgroundColor: "blue" },
            cursor: "pointer",
          }}
          type="submit"
        >
          Agregar
        </Box>
      </Box>
      {categories.length !== 0 && (
        <Box
          sx={{
            display: "flex",
            marginRight: 16,
            justifyContent: "end",
            alignSelf: "end",
            justifySelf: "end",
          }}
        >
          <Box
            sx={{
              backgroundColor: "black",
              padding: 2,
              borderRadius: 2,
              color: "white",
              alignSelf: "end",
              justifySelf: "end",
              cursor: "pointer",
              fontSize: 20,
            }}
            onClick={clearCategories}
          >
            Limpiar busquedas
          </Box>
        </Box>
      )}

      {categories.map((category) => (
        <Gif key={category} category={category} />
      ))}
    </>
  );
};
