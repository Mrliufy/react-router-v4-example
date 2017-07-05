const HonorsAPI = {
  honors: [
    { id: "A", name: "Torneo Final", year: 2014, coach: "Ramón Díaz" },
    { id: "B", name: "Copa Campeonato Primera División", year: 2014, coach: "Ramón Díaz" },
    { id: "C", name: "Copa Sudamericana", year: 2014, coach: "Marcelo Gallardo" },
    { id: "D", name: "Recopa Sudamericana", year: 2015, coach: "Marcelo Gallardo" },
    { id: "E", name: "Copa Libertadores", year: 2015, coach: "Marcelo Gallardo" },
    { id: "F", name: "Suruga Bank Championship", year: 2015, coach: "Marcelo Gallardo" },
    { id: "G", name: "Recopa Sudamericana", year: 2016, coach: "Marcelo Gallardo" },
    { id: "H", name: "Copa Argentina", year: 2016, coach: "Marcelo Gallardo" }
  ],
  all: function() { return this.honors},
  get: function(id) {
    return this.honors.find(p => p.id === id)
  }
}

export default HonorsAPI;
