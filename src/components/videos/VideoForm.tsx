import React, { ChangeEvent, FormEvent, useState,useEffect } from 'react'
import { Video } from '../../interfaces/Video'
import * as videoService from '../../services/Video.service'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'


export const VideoForm = () => {

  const navigate = useNavigate();
  const params = useParams();
  
  const [video, setVideo] = useState<Video>({ title: '', description:'', url:'' })
  const handleInputange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setVideo({ ...video, [e.target.name]: e.target.value })
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    await videoService.insertVideo(video)
    toast.success('Video agregado')
    navigate('/')
  }

  const getVideo = async (id: string) => {
    const { data } = await videoService.getVideo(id)
    const { title, description, url } = data
    setVideo({ title, description,url })
  }

  useEffect(() => {
    if(params.id) getVideo(params.id)
  }, [])

  return (
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>

            <form onSubmit={ handleSubmit }>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input type="text" className="form-control" name="title" required onChange={ handleInputange }/>
              </div>
              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea name="description" className="form-control" required onChange={ handleInputange } ></textarea>
              </div>
              <div className="mb-3">
                <label className="form-label">url</label>
                <input type="url" className="form-control" name="url" required onChange={ handleInputange } />
              </div>

            {
              params.id 
              ? 
              <button type="submit" className="btn btn-success">Actualizar video</button>
              :
              <button type="submit" className="btn btn-success">Agregar video</button>

            }
            
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoForm
