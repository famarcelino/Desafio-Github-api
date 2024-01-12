import './styles.css';
import Header from "../../components/Header";
import { ProfileDTO } from '../../models/profile';
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import axios from "axios";
import ProfileDetails from '../../components/ProfileDetails';

type FormData = {
    user: string;
}

export default function FindProfile() {

    const [profile, setProfile] = useState<string>();

    const [profileInfo, setProfileInfo] = useState<ProfileDTO>({
        id: 0,
        avatar_url: '',
        html_url: '',
        followers: 0,
        location: '',
        name: ''
    });

    const [formData, setFormData] = useState<FormData>({
        user: ''
    });

    const [error, setError] = useState<number>(0);

    function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
        const value = event.target.value;
        const name = event.target.name;
        setFormData({ ...formData, [name]: value });
    }

    useEffect(() => {
        setProfile(formData.user);
    }, [formData.user]);

    function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        console.log(profile);
        axios.get(`https://api.github.com/users/${profile}`)
            .then(response => {
                setProfileInfo({
                    id: response.data.id,
                    avatar_url: response.data.avatar_url,
                    html_url: response.data.html_url,
                    followers: response.data.followers,
                    location: response.data.location,
                    name: response.data.name,
                });
                setError(0);
            })
            .catch(() => {
                setError(1);
            });
    }

    return (
        <>
            <Header />
            <div className='dflex'>
                <div className='profile-container'>
                    <form onSubmit={handleFormSubmit}>
                        <h1>Encontre um perfil Github</h1>
                        <div>
                            <input
                                name="user"
                                value={formData.user}
                                type="text"
                                placeholder="Digite seu nome"
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <button type="submit">Encontrar</button>
                        </div>
                    </form>
                </div>
            </div >

            <div className={((profileInfo.id > 0) && (error === 0)) ? "showDiv" : "hidenDiv"}>
                <ProfileDetails profile={{
                    id: profileInfo.id,
                    avatar_url: profileInfo.avatar_url,
                    html_url: profileInfo.html_url,
                    followers: profileInfo.followers,
                    location: profileInfo.location,
                    name: profileInfo.name
                }} />
            </div>

            <div className={error === 1 ? "dflex showDiv" : "hidenDiv"}>
                <h1>Erro ao buscar usuário</h1>
            </div>
        </>
    );
}