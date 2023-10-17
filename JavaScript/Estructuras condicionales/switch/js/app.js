let day = Number(prompt("Ingrese el número del día: "));

switch (day) {
  case 1:
    document.write("el " + day + " es Lunes");
    break;
  case 2:
    document.write("el " + day + " es Martes");
    break;
  case 3:
    document.write("el " + day + " es Miércoles");
    break;
  case 4:
    document.write("el " + day + " es Jueves");
    break;
  case 5:
    document.write("el " + day + " es Viernes");
    break;
  case 6:
    document.write("el " + day + " es Sábado");
    break;
  case 7:
    document.write("el " + day + " es Domingo");
    break;
  default:
    document.write("Número de día ingresado no es válido");
}
