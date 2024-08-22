import React from 'react'

export default function Atividade(props: any) {

  const prioritySelect = (param:any) => {
    switch (param) {

      case 'Baixa':
      case 'Média':
      case 'Alta':
        return param;
      default: 
        return 'SemPrioridade';
    }
  }


  const priorityICon = (param: any, icone:any) => {
    switch (param) {
      case 'Baixa':
        return icone ? 'smile' : 'danger';
      case 'Média':
        return icone ? 'laugh' : 'primary';
      case 'Alta':
        return icone ? 'smile-beam' : 'success';
      default:
        return 'SemPrioridade';
    }

  }

  return (
    <div className={'card mb-2 shadow-sm border-' + priorityICon(props.ativ.prioridade)}  >
      <div className='card-body'>
        <div className=' d-flex-justify-content-between'>
          <h6 className='card-title'>
            <span className='badge bg-info me-2' >{props.ativ.id}</span>
            - {props.ativ.titulo}
          </h6 >
          <h6 className='d-flex justify-content-end' > Prioridade:
            <span className={'ms-1 text-' + priorityICon(props.ativ.prioridade)}>
              <i className={'me-1 far fa-' + priorityICon(props.ativ.prioridade, true)}>    </i>
              {prioritySelect(props.ativ.prioridade)}
            </span>
          </h6>
        </div>
        <p className='card-text'>  {props.ativ.descricao}</p>
        <div className='d-flex justify-content-end pt-2 m-0 border-top'>
          <button className='me-2 btn-sm btn btn-outline-primary'
            onClick={() => props.editarAtividade(props.ativ.id)}>
            <i className='me-1 far fa-edit'> </i>Editar
          </button>



          <button className='btn-sm btn btn-outline-danger'
            onClick={() => props.excluirAtividade(props.ativ.id)}>
            <i className='me-1 far fa-trash-can'></i> Excluir </button>
        </div>
      </div>
    </div>
  )
}
