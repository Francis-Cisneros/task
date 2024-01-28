import React, { useState, useEffect } from "react";
import { ApiService, Task } from "../service/apiService";

interface EditTaskFormProps {
  closeModal: () => void;
  taskId: number;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ closeModal, taskId }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(0); // Cambiar a 0 para "En curso"

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const response = await ApiService.getTaskById(taskId);
        const task = response.data.task;
        if (task) {
          setTitle(task.title);
          setDescription(task.description);
          setStatus(task.status); // No necesita conversión
        } else {
          console.error("La respuesta de getTaskById no contiene los datos de la tarea esperados");
        }
      } catch (error) {
        console.error("Error al obtener la tarea para editar:", error);
      }
    };
    fetchTask();
  }, [taskId]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Estado enviado al formulario:", status);
    try {
      await ApiService.updateTask(taskId, { title, description, status });
      console.log("Tarea actualizada");
      setTitle("");
      setDescription("");
      closeModalAndReload(); // Llamar a la función que cierra el modal y recarga la página
    } catch (error) {
      console.error("Error al guardar la tarea:", error);
    }
  };

  const closeModalAndReload = () => {
    closeModal(); 
    window.location.reload(); 
  };

  return (
    <div>
      <div className="modal-backdrop fade show" onClick={closeModal}></div>
      <div className="modal fade show" role="dialog" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-header p-3 bg-info-subtle">
              <h5 className="modal-title">Editar Tarea</h5>
              <button type="button" className="btn-close" onClick={closeModalAndReload}></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="title" className="form-label">Título</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-lg-12 mt-4">
                    <label htmlFor="description" className="form-label">Descripción</label>
                    <textarea
                      className="form-control"
                      id="description"
                      rows={3}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <label htmlFor="estado" className="form-label">Estado</label>
                    <select
                      className="form-select"
                      id="estado"
                      value={status}
                      onChange={(e) => setStatus(parseInt(e.target.value))}
                    >
                      <option value={1}>En curso</option>
                      <option value={2}>Completado</option>
                      <option value={3}>Cancelado</option>
                    </select>
                  </div>
                  <div className="mt-4">
                    <div className="hstack gap-2 justify-content-end">
                      <button type="button" className="btn btn-light" onClick={closeModalAndReload}>Cerrar</button>
                      <button type="submit" className="btn btn-success">Guardar Cambios</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditTaskForm;
