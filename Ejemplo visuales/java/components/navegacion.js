/* === BOTONES DE NAVEGACION === */
function cargarNavegacion(containerId, gistUrl = null) {
    const gistLink = gistUrl || 
        "#";
    
    const html = `
        <div>
            <a style="color: aquamarine;" href="../../index.html" class="btn">Inicio</a>
            <a style="color: aquamarine;"
                href="${gistUrl}"
                class="btn" target="_blank">Codigo en gist</a>
        </div>
        <style>
        
        .btn {
            display: inline-block;
            background: linear-gradient(90deg, rgba(47,129,247,0.12), rgba(126,231,135,0.06));
            padding: 10px 20px;
            border-radius: 8px;
            color: #e6edf3;
            text-decoration: none;
            font-weight: 600;
            border: 1px solid rgba(47,129,247,0.12);
            box-shadow: 0 4px 14px rgba(47,129,247,0.04);
            transition: transform 0.18s ease, box-shadow 0.18s ease;
            margin: 5px;
        }
        </style>
    `;
    document.getElementById(containerId).innerHTML = html;
}