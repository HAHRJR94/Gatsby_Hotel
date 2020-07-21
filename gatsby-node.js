exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultado = await graphql(`
    query {
      allDatoCmsHabitacion {
        nodes {
          slug
        }
      }
    }
  `)

  // console.log(resultado)

  // En caso que hayan errores
  if (resultado.errors) {
    reporter.panic('No hubo respuesta', resultado.errors)
  }

  // //Crear los archivos de las paginas
  const habitaciones = resultado.data.allDatoCmsHabitacion.nodes

  habitaciones.forEach(habitacion => {
    actions.createPage({
      path: habitacion.slug,
      component: require.resolve('./src/components/HabitacionTemplate.jsx'),
      context: { slug: habitacion.slug }
    })
  });
}
