// Get the canvas element
const myChartCanvas = document.getElementById('myChart');
const myChartCanvas2 = document.getElementById('myChart2');

// Chart.js configuration
const myChart = new Chart(myChartCanvas, {
  type: 'line', // You can change the type to bar, pie, etc.
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Ganancias', // Label for the dataset
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      borderColor: '#2ae8b5', // Border color
      backgroundColor: '#2ae8b5',
      borderWidth: 1, // Border width
      fill: false // Fill the area under the line
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    // Añade las opciones de respuesta
    maintainAspectRatio: false, // Desactiva la relación de aspecto fija
    responsive: true // Habilita la respuesta del gráfico 
  }
});

// Chart.js configuration
const myChart2 = new Chart(myChartCanvas2, {
  type: 'bar', // Cambia a 'bar' para gráfico de barras
  data: {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Ventas', 
      data: [820, 932, 901, 934, 1290, 1330, 1320],
      borderColor: '#2ae8b5',
      backgroundColor: '#2ae8b5',
      borderWidth: 1,
      fill: true // Rellena las barras
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    },
    // Añade las opciones de respuesta
    maintainAspectRatio: false, // Desactiva la relación de aspecto fija
    responsive: true // Habilita la respuesta del gráfico 
  }
});


/* Nueva Orden - New Order */
document.addEventListener('DOMContentLoaded', () => {
    const orderItems = [
      { id: 1, name: 'Headset Run S...', price: 46.00, quantity: 2 },
      { id: 2, name: 'Shoes Colorful...', price: 70.00, quantity: 2 },
    ];
  
    const discount = 58.00;
    const tbody = document.getElementById('order-items');
    const subtotalEl = document.getElementById('subtotal');
    const totalEl = document.getElementById('total');
  
    function updateOrderSummary() {
      let subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      let total = subtotal - discount;
  
      subtotalEl.textContent = `S/.${subtotal.toFixed(2)}`;
      totalEl.textContent = `S/.${total.toFixed(2)}`;
    }
  
    function renderOrderItems() {
      tbody.innerHTML = '';
      orderItems.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td><div class="w-12 h-12 bg-gray-200 rounded-md"></div></td>
          <td>${item.name}</td>
          <td>${item.quantity}</td>
          <td>S/.${item.price.toFixed(2)}</td>
          <td>S/.${(item.price * item.quantity).toFixed(2)}</td>
          <td><button class="btn btn-delete">Eliminar</button></td>
        `;
        tbody.appendChild(row);
      });
    }
  
    renderOrderItems();
    updateOrderSummary();
  });
  