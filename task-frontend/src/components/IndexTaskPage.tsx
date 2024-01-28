import React, { useEffect, useState } from "react";
import { ApiService, Task } from "../service/apiService";
import CreateTaskForm from "./TaskForm";
import EditTaskForm from "./EditTaskForm";

const IndexTaskPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [taskIdToDelete, setTaskIdToDelete] = useState<number | null>(null);
  const [taskIdToEdit, setTaskIdToEdit] = useState<number | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await ApiService.getTasks();
        if ("tasks" in response.data) {
          if (Array.isArray(response.data.tasks)) {
            setTasks(response.data.tasks);
          } else {
            console.error("La propiedad tasks no es un arreglo");
          }
        } else {
          console.error("La propiedad tasks no está presente en la respuesta");
        }
      } catch (error) {
        console.error("Error al obtener las tareas:", error);
      }
    };

    fetchData();
  }, []);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openEditModal = (taskId: number) => {
    setTaskIdToEdit(taskId);
    openModal();
  };

  const handleDeleteTask = async () => {
    if (taskIdToDelete !== null) {
      try {
        await ApiService.deleteTask(taskIdToDelete);
        setTasks(tasks.filter((task) => task.id !== taskIdToDelete));
      } catch (error) {
        console.error("Error al eliminar la tarea:", error);
      } finally {
        setTaskIdToDelete(null);
      }
    }
  };

  const formatUpdatedAtTime = (updatedAt: string) => {
    const updatedTime = new Date(updatedAt);
    const currentTime = new Date();
    const timeDifference = Math.abs(
      currentTime.getTime() - updatedTime.getTime()
    );
    const minutesDifference = Math.floor(timeDifference / (1000 * 60));
    const hoursDifference = Math.floor(minutesDifference / 60);
    const daysDifference = Math.floor(hoursDifference / 24);
    if (daysDifference > 0) {
      if (daysDifference === 1) {
        return "Actualizado hace 1 día";
      } else {
        return `Actualizado hace ${daysDifference} días`;
      }
    } else if (hoursDifference > 0) {
      if (hoursDifference === 1) {
        return "Actualizado hace 1 hora";
      } else {
        return `Actualizado hace ${hoursDifference} horas`;
      }
    } else if (minutesDifference > 0) {
      if (minutesDifference === 1) {
        return "Actualizado hace 1 minuto";
      } else {
        return `Actualizado hace ${minutesDifference} minutos`;
      }
    } else {
      return "Actualizado hace unos momentos";
    }
  };

  const formatCreatedAtDate = (createdAt: string) => {
    const date = new Date(createdAt);
    const options = { day: "numeric", month: "long" };
    return date.toLocaleDateString("es-ES", options);
  };

  return (
    <div className="main-content">
      <div className="page-content">
        <div className="container-fluid">
          <button onClick={openModal} className="btn btn-success">
            <i className="ri-add-line align-bottom me-1"></i> Añadir Nuevo
          </button>
        </div>
      </div>

      {modalOpen && taskIdToEdit !== null && (
        <EditTaskForm closeModal={closeModal} taskId={taskIdToEdit} />
      )}
      {modalOpen && taskIdToEdit === null && (
        <CreateTaskForm closeModal={closeModal} />
      )}

      <div className="container-fluid mt-4">
        <div className="row">
          {tasks.map((task) => (
            <div key={task.id} className="col-xxl-3 col-sm-6 project-card">
              <div className="card card-height-100">
                <div className="card-body">
                  <div className="d-flex flex-column h-100">
                    <div className="d-flex">
                      <div className="flex-grow-1">
                        <p className="text-muted mb-4">
                          {formatUpdatedAtTime(task.updated_at)}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <a
                          href="javascript:void(0);"
                          className="text-muted"
                          id={`dropdownMenuLink${task.id}`}
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          <i className="ri-more-fill"></i>
                        </a>
                        <ul
                          className="dropdown-menu"
                          aria-labelledby={`dropdownMenuLink${task.id}`}
                        >
                          <li>
                            <a
                              style={{ cursor: "pointer" }}
                              className="dropdown-item"
                              onClick={() => openEditModal(task.id)}
                            >
                              <i className="ri-edit-2-line align-bottom me-2 text-muted"></i>
                              Editar
                            </a>
                          </li>
                          <li>
                            <a
                              style={{ cursor: "pointer" }}
                              className="dropdown-item"
                              data-bs-toggle="modal"
                              data-bs-target="#deleteConfirmationModal"
                              onClick={() => setTaskIdToDelete(task.id)}
                            >
                              <i className="ri-delete-bin-5-line align-bottom me-2 text-muted"></i>{" "}
                              Borrar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="d-flex mb-2">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-sm">
                          <span className="avatar-title bg-warning-subtle rounded p-2">
                            <img
                              src="src/assets/images/brands/mail_chimp.png"
                              alt=""
                              className="img-fluid p-1"
                            />
                          </span>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="mb-1 fs-16">
                          <a className="text-body">{task.title}</a>
                        </h5>
                        <p className="text-muted text-truncate-two-lines mb-3">
                          {task.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <div className="d-flex mb-2">
                        <div className="flex-grow-1">
                          <div>{task.estado}</div>
                        </div>
                      </div>
                      <div className="progress progress-sm animated-progress">
                        <div
                          className={`progress-bar ${(() => {
                            switch (parseInt(task.status)) {
                              case 1:
                                return "bg-primary";
                              case 2:
                                return "bg-success";
                              case 3:
                                return "bg-danger";
                              default:
                                return "";
                            }
                          })()}`}
                          role="progressbar"
                          aria-valuenow={
                            parseInt(task.status) === 3
                              ? 100
                              : parseInt(task.status) === 2
                              ? 100
                              : 30
                          }
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{
                            width:
                              parseInt(task.status) === 3
                                ? "100%"
                                : parseInt(task.status) === 2
                                ? "100%"
                                : "30%",
                          }}
                        >
                          {(() => {
                            switch (parseInt(task.status)) {
                              case 1:
                                return "En curso";
                              case 2:
                                return "Completado";
                              case 3:
                                return "Cancelado";
                              default:
                                return "";
                            }
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-footer bg-transparent border-top-dashed py-2">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="text-muted">
                        <i className="ri-calendar-event-fill me-1 align-bottom"></i>
                        {formatCreatedAtDate(task.created_at)}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="modal fade"
        id="deleteConfirmationModal"
        tabIndex={-1}
        aria-labelledby="deleteConfirmationModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteConfirmationModalLabel">
                Confirmación de Eliminación
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              ¿Estás seguro de que deseas eliminar esta tarea?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancelar
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleDeleteTask}
                data-bs-dismiss="modal"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndexTaskPage;
