import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: "#0d0d0d",
        padding: 4,
        marginTop: 8
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 4
        }}
      >
        {/* Columna 1 */}
        <Box sx={{ maxWidth: 300 }}>
          <Typography variant="h6" sx={{ color: "#00e5ff" }}>
            NovaZone
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 1, color: "#ccc" }}>
            NovaZone es tu tienda gamer especializada en consolas,
            accesorios y juegos de última generación.
            Calidad, rendimiento y pasión por el gaming en un solo lugar.
          </Typography>
        </Box>

        {/* Columna 2 */}
        <Box>
          <Typography variant="h6">Enlaces</Typography>
          <Typography variant="body2">Inicio</Typography>
          <Typography variant="body2">Productos</Typography>
          <Typography variant="body2">Ofertas</Typography>
          <Typography variant="body2">Juegos</Typography>
        </Box>

        {/* Columna 3 */}
        <Box>
          <Typography variant="h6">Contacto</Typography>
          <Typography variant="body2">soporte@novazone.com</Typography>
          <Typography variant="body2">Medellín, Colombia</Typography>
        </Box>
      </Box>

      {/* Línea inferior */}
      <Box
        sx={{
          borderTop: "1px solid #222",
          marginTop: 4,
          paddingTop: 2,
          textAlign: "center"
        }}
      >
        <Typography variant="body2" sx={{ color: "#777" }}>
          © 2026 NovaZone - Todos los derechos reservados
        </Typography>
      </Box>
    </Box>
  );
}