import React from "react";
import { Box, Card, CardContent, CardMedia, Typography, Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useFavorites } from "../../auth/context/FavoritesContext";

export const Myfavorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  if (favorites.length === 0) return <Typography sx={{ padding: 4 }}>No tienes productos en favoritos.</Typography>;

  return (
    <Box sx={{ padding: 4, display: "flex", flexWrap: "wrap", gap: 3 }}>
      {favorites.map(producto => (
        <Card key={producto.id} sx={{ width: { xs: "100%", sm: "45%", md: "22%" }, backgroundColor: "#1a1a1a" }}>
          <CardMedia component="img" height="200" image={producto.imagen} alt={producto.nombre} />
          <CardContent>
            <Typography variant="h6" sx={{ color: "#fff" }}>{producto.nombre}</Typography>
            <Typography variant="body2" sx={{ color: "#ccc" }}>{producto.precio}</Typography>
            <Button variant="outlined" color="secondary" startIcon={<FavoriteIcon />} fullWidth onClick={() => removeFavorite(producto.id)}>
              Quitar de favoritos
            </Button>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};