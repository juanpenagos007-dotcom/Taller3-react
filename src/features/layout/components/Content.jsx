import { Box, Typography, Card, CardContent, CardMedia, Button, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useFavorites } from "../../auth/context/FavoritesContext";

const destacados = [
  { id: 14, nombre: "PlayStation 5", imagen: "/imagenes/ps5.jpg", precio: "$2.800.000" },
  { id: 15, nombre: "Monitor Gamer 144Hz", imagen: "/imagenes/monitor.jpg", precio: "$1.200.000" },
  { id: 16, nombre: "Teclado Mecánico RGB", imagen: "/imagenes/teclado.jpg", precio: "$350.000" }
];

export default function Content() {

  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  const handleFavorite = (producto) => {
    if (isFavorite(producto.id)) {
      removeFavorite(producto.id);
    } else {
      addFavorite(producto);
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h3" gutterBottom>
        Bienvenido a NovaZone Gaming Store
      </Typography>

      <Typography variant="body1" sx={{ marginBottom: 5 }}>
        Potencia tu experiencia gaming con lo mejor del mercado 🔥
      </Typography>

      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Productos Destacados
      </Typography>

      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 3 }}>
        {destacados.map((producto) => (
          <Card
            key={producto.id}
            sx={{
              width: { xs: "100%", sm: "45%", md: "30%" },
              backgroundColor: "#1a1a1a",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 8px 25px rgba(0,0,0,0.6)"
              }
            }}
          >
            <CardMedia
              component="img"
              height="200"
              image={producto.imagen}
              alt={producto.nombre}
            />

            <CardContent>
              <Typography variant="h6">{producto.nombre}</Typography>

              <Typography variant="body2" sx={{ mb: 2 }}>
                {producto.precio}
              </Typography>

              <Box sx={{ display: "flex", gap: 1, mt: 2 }}>

            <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            sx={{ flex: 1 }}
            >
            Comprar
            </Button>

          <Button
           variant={isFavorite(producto.id) ? "outlined" : "contained"}
           color="secondary"
           startIcon={<FavoriteIcon />}
           sx={{ flex: 1 }}
           onClick={() =>
           isFavorite(producto.id)
          ? removeFavorite(producto.id)
          : addFavorite(producto)
          }
          >
           {isFavorite(producto.id) ? "Quitar" : " Añadir a Favoritos"}
         </Button>

      </Box>

            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
}