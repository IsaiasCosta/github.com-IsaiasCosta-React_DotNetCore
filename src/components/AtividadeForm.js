import { useState, useEffect } from 'react'
import Atividade from './Atividade';

const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: ''
};

export default function AtividadeForm(props) {
    const [atividade, setAtividade] = useState(atividadeAtual());

    useEffect(() => {
        if (props.ativSelecionada.id !== 0)
            setAtividade(props.ativSelecionada);
    }, [props.ativSelecionada]);

    const inputTexttHandler = (e) => {
        const { name, value } = e.target;

        setAtividade({ ...atividade, [name]: value })
        console.log(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
       if (props.ativSelecionada.id !== 0) props.atualizarAtividade(atividade);
        else props.addAtividade(atividade);
        setAtividade(atividadeInicial)
    }
    const handleCancelar = (e) => {
        e.preventDefault();
        props.cancelarAtividade();
        setAtividade(atividadeInicial);
    }
    function atividadeAtual() {
        if (props.ativSelecionada.id !== 0) {
            return props.ativSelecionada;
        } else {
            return atividadeInicial;
        }
    }

    return (
        <>
            <h1> Atividade {atividade.id !== 0 ? atividade.id : ''}</h1>
            <form className=' row g-3' onSubmit={handleSubmit}  >
                <div className='col-md-6'>
                    <label className='form-label'>Título: </label>
                    <input id='titulo'
                        type='text'
                        name='titulo'
                        onChange={inputTexttHandler}
                        value={atividade.titulo}
                        className=' form-control' />
                </div>
                <div className='col-md-6'>
                    <label className='form-label me-1'>Prioridade </label>
                    <select
                        name='prioridade'
                        id="prioridade"
                        onChange={inputTexttHandler}
                        type='text'
                        value={atividade.prioridae}
                        className='form-select'>
                        <option value='Sem Prioridade'>Selecione ...</option>
                        <option value='Baixa'>Baixa</option>
                        <option value='Média'>Média</option>
                        <option value='Alta'>Alta</option>
                    </select>
                </div>
                <div className='col-md-12'>
                    <label className='form-label'>Descrição: </label>
                    <textarea id='descricao'
                        type='text'
                        name='descricao'
                        onChange={inputTexttHandler}
                        value={atividade.descricao}
                        className=' form-control' />
                </div>
                <div className='d-grid gap-2'>
                    {atividade.id === 0 ? (
                        < button className='btn btn-outline-success'
                         type='submit' >+ Incluir
                        </button>
                    ) : (<>
                        <button
                            className='btn btn-outline-success'
                             type='submit'>  Salvar
                        </button>

                        <button className='btn btn-outline-success'
                            onClick={handleCancelar}
                        > Cancelar
                        </button>
                    </>)}
                </div>
            </form >
        </>
    );
}