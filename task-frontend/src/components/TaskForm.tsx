import React, { useState } from 'react';
import { ApiService } from '../service/apiService';

interface CreateTaskFormProps {
  closeModal: () => void;
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ closeModal }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<number>(1); // Cambiar a tipo number

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await ApiService.createTask({ title, description, status });
      console.log('Tarea creada');
      setTitle('');
      setDescription('');
      setStatus(1); 
      closeModal();
      window.location.reload();
    } catch (error) {
      console.error('Error al guardar la tarea:', error);
    }
  };

  return (
    <div>
      <div className="modal-backdrop fade show" onClick={closeModal}></div>
      <div className="modal fade show" role="dialog" style={{ display: "block" }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content border-0">
            <div className="modal-header p-3 bg-info-subtle">
              <h5 className="modal-title">Crear Nueva Tarea</h5>
              <button type="button" className="btn-close" onClick={closeModal}></button>
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
                  <div className="mt-4">
                    <div className="hstack gap-2 justify-content-end">
                      <button type="button" className="btn btn-light" onClick={closeModal}>Cerrar</button>
                      <button type="submit" className="btn btn-success">Crear Tarea</button>
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

export default CreateTaskForm;
