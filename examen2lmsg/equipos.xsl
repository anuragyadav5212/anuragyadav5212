<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/equipos">
<html lang="es">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/x-icon" href="imagenes/iconolmsg.ico" />
        <script type="module" src="scripts/footer-template.js"></script>
        <script type="module" src="scripts/header-template.js"></script>
        <link rel="stylesheet" href="estilos.css" />
        <title>Equipos - Anurag Yadav</title>
      </head>
  <body>

    <my-header></my-header>


    <main class="contenido-principal">
      <h2>Base de Datos de equipos</h2>
    <table border="1" class="wrapper">
      <tr>
        <th>Codigo</th>
        <th>Nombre</th>
        <th>Creación</th>
        <th>Número Jugadores</th>
        <th>Presupuesto</th>
        <th>Ganados</th>
        <th>Perdidos</th>
        <th>Puntos</th>
      </tr>

      <xsl:for-each select="equipo">
        
        <xsl:sort select="ganados * 3" data-type="number" order="descending"/>
        <xsl:sort select="perdidos" data-type="number" order="ascending"/>

        <tr>
	        <td><xsl:value-of select="codigo"/></td>
	        <td><xsl:value-of select="nombre"/></td>
            <td><xsl:value-of select="creacion"/></td>
            <td><xsl:value-of select="plantilla"/></td>
            <td><xsl:value-of select="presupuesto"/></td>
            <td><xsl:value-of select="ganados"/></td>
            <td><xsl:value-of select="perdidos"/></td>
            <td><xsl:value-of select="ganados * 3"/></td>
           
        </tr>
     
        </xsl:for-each>
     
        <tr>
        <td >Total Equipos: </td>
          <td colspan="3"><xsl:value-of select="count(equipo)"/></td>
          <xsl:variable name="SumPuntos" select="sum(equipo/ganados) * 3"/>
          <xsl:variable name="CountEquipos" select="count(equipo)"/>
          <td>Media puntos:</td>
          <td colspan="5"> <xsl:value-of select="$SumPuntos div $CountEquipos"/></td>
        </tr>
	    </table>
      </main>


      
      <my-footer></my-footer>
  </body>
  </html>

</xsl:template>
</xsl:stylesheet>
