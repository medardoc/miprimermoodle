document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('horario-table')) {
        loadClasses();
    }
    if (document.getElementById('asistencia-table')) {
        loadAsistencia();
    }
    if (document.getElementById('calificaciones-table')) {
        loadCalificaciones();
    }
    if (document.getElementById('solicitudes-list')) {
        loadSolicitudes();
    }
    if (document.getElementById('pagos-table')) {
        loadPagos();
    }
    if (document.getElementById('asignatura-table')) {
        loadAsignaturas();
    }
});

// Funciones para Horario

function openForm() {
    document.getElementById('form-container').style.display = 'block';
}

function closeForm() {
    document.getElementById('form-container').style.display = 'none';
}

function addClass() {
    const name = document.getElementById('class-name').value;
    const time = document.getElementById('class-time').value;
    
    if (!name || !time) return;

    const classes = JSON.parse(localStorage.getItem('classes')) || [];
    classes.push({ name, time });
    localStorage.setItem('classes', JSON.stringify(classes));
    loadClasses();
    closeForm();
}

function loadClasses() {
    const classes = JSON.parse(localStorage.getItem('classes')) || [];
    const tableBody = document.getElementById('horario-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    classes.forEach((cls, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = cls.name;
        row.insertCell(1).textContent = cls.time;
        const actionsCell = row.insertCell(2);
        actionsCell.innerHTML = `<button onclick="deleteClass(${index})">Eliminar</button>`;
    });
}

function deleteClass(index) {
    const classes = JSON.parse(localStorage.getItem('classes')) || [];
    classes.splice(index, 1);
    localStorage.setItem('classes', JSON.stringify(classes));
    loadClasses();
}

// Funciones para Asistencia

function openAsistenciaForm() {
    document.getElementById('asistencia-form-container').style.display = 'block';
}

function closeAsistenciaForm() {
    document.getElementById('asistencia-form-container').style.display = 'none';
}

function addAsistencia() {
    const date = document.getElementById('asistencia-date').value;
    const status = document.getElementById('asistencia-status').value;

    if (!date || !status) return;

    const asistencia = JSON.parse(localStorage.getItem('asistencia')) || [];
    asistencia.push({ date, status });
    localStorage.setItem('asistencia', JSON.stringify(asistencia));
    loadAsistencia();
    closeAsistenciaForm();
}

function loadAsistencia() {
    const asistencia = JSON.parse(localStorage.getItem('asistencia')) || [];
    const tableBody = document.getElementById('asistencia-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    asistencia.forEach((item, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = item.date;
        row.insertCell(1).textContent = item.status;
        const actionsCell = row.insertCell(2);
        actionsCell.innerHTML = `<button onclick="deleteAsistencia(${index})">Eliminar</button>`;
    });
}

function deleteAsistencia(index) {
    const asistencia = JSON.parse(localStorage.getItem('asistencia')) || [];
    asistencia.splice(index, 1);
    localStorage.setItem('asistencia', JSON.stringify(asistencia));
    loadAsistencia();
}

// Funciones para Calificaciones

function openCalificacionesForm() {
    document.getElementById('calificaciones-form-container').style.display = 'block';
}

function closeCalificacionesForm() {
    document.getElementById('calificaciones-form-container').style.display = 'none';
}

function addCalificacion() {
    const asignatura = document.getElementById('asignatura-name').value;
    const nota = document.getElementById('nota').value;

    if (!asignatura || !nota) return;

    const calificaciones = JSON.parse(localStorage.getItem('calificaciones')) || [];
    calificaciones.push({ asignatura, nota });
    localStorage.setItem('calificaciones', JSON.stringify(calificaciones));
    loadCalificaciones();
    closeCalificacionesForm();
}

function loadCalificaciones() {
    const calificaciones = JSON.parse(localStorage.getItem('calificaciones')) || [];
    const tableBody = document.getElementById('calificaciones-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    calificaciones.forEach((item, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = item.asignatura;
        row.insertCell(1).textContent = item.nota;
        const actionsCell = row.insertCell(2);
        actionsCell.innerHTML = `<button onclick="deleteCalificacion(${index})">Eliminar</button>`;
    });
}

function deleteCalificacion(index) {
    const calificaciones = JSON.parse(localStorage.getItem('calificaciones')) || [];
    calificaciones.splice(index, 1);
    localStorage.setItem('calificaciones', JSON.stringify(calificaciones));
    loadCalificaciones();
}

// Funciones para Solicitudes

function openSolicitudForm() {
    document.getElementById('solicitud-form-container').style.display = 'block';
}

function closeSolicitudForm() {
    document.getElementById('solicitud-form-container').style.display = 'none';
}

function addSolicitud() {
    const solicitud = document.getElementById('solicitud-text').value;

    if (!solicitud) return;

    const solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];
    solicitudes.push({ solicitud });
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes));
    loadSolicitudes();
    closeSolicitudForm();
}

function loadSolicitudes() {
    const solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];
    const list = document.getElementById('solicitudes-list');
    list.innerHTML = '';

    solicitudes.forEach((item, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = item.solicitud;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.onclick = () => deleteSolicitud(index);
        listItem.appendChild(deleteButton);
        list.appendChild(listItem);
    });
}

function deleteSolicitud(index) {
    const solicitudes = JSON.parse(localStorage.getItem('solicitudes')) || [];
    solicitudes.splice(index, 1);
    localStorage.setItem('solicitudes', JSON.stringify(solicitudes));
    loadSolicitudes();
}

// Funciones para Pagos

function openPagosForm() {
    document.getElementById('pagos-form-container').style.display = 'block';
}

function closePagosForm() {
    document.getElementById('pagos-form-container').style.display = 'none';
}

function addPago() {
    const desc = document.getElementById('pago-desc').value;
    const status = document.getElementById('pago-status').value;

    if (!desc || !status) return;

    const pagos = JSON.parse(localStorage.getItem('pagos')) || [];
    pagos.push({ desc, status });
    localStorage.setItem('pagos', JSON.stringify(pagos));
    loadPagos();
    closePagosForm();
}

function loadPagos() {
    const pagos = JSON.parse(localStorage.getItem('pagos')) || [];
    const tableBody = document.getElementById('pagos-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    pagos.forEach((item, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = item.desc;
        row.insertCell(1).textContent = item.status;
        const actionsCell = row.insertCell(2);
        actionsCell.innerHTML = `<button onclick="deletePago(${index})">Eliminar</button>`;
    });
}

function deletePago(index) {
    const pagos = JSON.parse(localStorage.getItem('pagos')) || [];
    pagos.splice(index, 1);
    localStorage.setItem('pagos', JSON.stringify(pagos));
    loadPagos();
}

// Funciones para Asignaturas

function openAsignaturaForm() {
    document.getElementById('asignatura-form-container').style.display = 'block';
}

function closeAsignaturaForm() {
    document.getElementById('asignatura-form-container').style.display = 'none';
}

function addAsignatura() {
    const nombre = document.getElementById('asignatura-nombre').value;
    const descripcion = document.getElementById('asignatura-descripcion').value;

    if (!nombre || !descripcion) return;

    const asignaturas = JSON.parse(localStorage.getItem('asignaturas')) || [];
    asignaturas.push({ nombre, descripcion });
    localStorage.setItem('asignaturas', JSON.stringify(asignaturas));
    loadAsignaturas();
    closeAsignaturaForm();
}

function loadAsignaturas() {
    const asignaturas = JSON.parse(localStorage.getItem('asignaturas')) || [];
    const tableBody = document.getElementById('asignatura-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    asignaturas.forEach((item, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = item.nombre;
        row.insertCell(1).textContent = item.descripcion;
        const actionsCell = row.insertCell(2);
        actionsCell.innerHTML = `<button onclick="deleteAsignatura(${index})">Eliminar</button>`;
    });
}

function deleteAsignatura(index) {
    const asignaturas = JSON.parse(localStorage.getItem('asignaturas')) || [];
    asignaturas.splice(index, 1);
    localStorage.setItem('asignaturas', JSON.stringify(asignaturas));
    loadAsignaturas();
}
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('asignatura-table')) {
        loadAsignaturas();
    }
});

// Funciones para Asignaturas

function openAsignaturaForm() {
    document.getElementById('form-container').style.display = 'block';
}

function closeAsignaturaForm() {
    document.getElementById('form-container').style.display = 'none';
}

function addAsignatura() {
    const nombre = document.getElementById('asignatura-nombre').value;
    const descripcion = document.getElementById('asignatura-descripcion').value;

    if (!nombre || !descripcion) return;

    const asignaturas = JSON.parse(localStorage.getItem('asignaturas')) || [];
    asignaturas.push({ nombre, descripcion });
    localStorage.setItem('asignaturas', JSON.stringify(asignaturas));
    loadAsignaturas();
    closeAsignaturaForm();
}

function loadAsignaturas() {
    const asignaturas = JSON.parse(localStorage.getItem('asignaturas')) || [];
    const tableBody = document.getElementById('asignatura-table').getElementsByTagName('tbody')[0];
    tableBody.innerHTML = '';

    asignaturas.forEach((item, index) => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = item.nombre;
        row.insertCell(1).textContent = item.descripcion;
        const actionsCell = row.insertCell(2);
        actionsCell.innerHTML = `<button onclick="deleteAsignatura(${index})">Eliminar</button>`;
    });
}

function deleteAsignatura(index) {
    const asignaturas = JSON.parse(localStorage.getItem('asignaturas')) || [];
    asignaturas.splice(index, 1);
    localStorage.setItem('asignaturas', JSON.stringify(asignaturas));
    loadAsignaturas();
}
