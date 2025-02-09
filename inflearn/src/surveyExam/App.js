import React, { useState } from "react";
import TextInput from './components/textInput';
import Select from './components/select';
import './css/index.css';

const contryOptions = ['한국', '일본', '중국', '미국', '러시아'];

function App() {

    const [formValue, setFormValue] = useState({ name: '', contry: '', address: '' });

    return(
        <main>
            <div className="form">
                <div className="form-item">
                    <span className="form-title">1. 이름은 무엇인가요?</span>
                    <TextInput 
                        value={formValue.name} 
                        setValue={(value) => {
                            setFormValue((state) => ({
                                ...state,
                                name: value
                            }));
                        }}
                    />
                </div>

                <div className="form-item">
                    <span className="form-title">2. 사는 곳은 어딘가요?</span>
                    <Select 
                        value={formValue.contry} 
                        setValue={(value) => {
                            setFormValue((state) => ({
                                ...state,
                                contry: value
                            }));
                        }}
                        options = {contryOptions}
                    />
                </div>

                {formValue.contry === '한국' && (
                    <div className="form-item">
                        <span className="form-title">2-1. 한국 어디에 사시나요?</span>
                        <TextInput 
                            value={formValue.address} 
                            setValue={(value) => {
                                setFormValue((state) => ({
                                    ...state,
                                    address: value
                                }));
                            }}
                        />
                    </div>
                )}

                <div className="button-group">
                    <button 
                        onClick={() => {alert('자장되었습니다.'); setFormValue({ name: '', contry: '', address: '' })}}
                        disabled={!formValue.name || !formValue.contry}
                    >
                        저장
                    </button>
                </div>
            </div>
        </main>
    );
}

export default App;