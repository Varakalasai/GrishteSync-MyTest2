const chart1 = document.getElementById('chart1').getContext('2d');
const chart2 = document.getElementById('chart2').getContext('2d');

const chart1Data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Sales',
        data: [100, 200, 300, 400, 500],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
    }]
};

const chart2Data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
        label: 'Expenses',
        data: [500, 400, 300, 200, 100],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};

new Chart(chart1, {
    type: 'bar',
    data: chart1Data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

new Chart(chart2, {
    type: 'line',
    data: chart2Data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

const createForm = document.getElementById('create-form');
const readForm = document.getElementById('read-form');
const updateForm = document.getElementById('update-form');
const deleteForm = document.getElementById('delete-form');

createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    console.log(`Create: ${name}, ${age}`);
});

readForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('id').value;
    console.log(`Read: ${id}`);
});

updateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('id').value;
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    console.log(`Update: ${id}, ${name}, ${age}`);
});

deleteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const id = document.getElementById('id').value;
    console.log(`Delete: ${id}`);
});