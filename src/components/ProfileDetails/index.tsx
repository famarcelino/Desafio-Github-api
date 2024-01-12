import "./styles.css";
import { ProfileDTO } from "../../models/profile";

type Props = {
    profile: ProfileDTO;
}

export default function ProfileDetails({ profile }: Props) {
    return (
        <>
            <div className="dflex profile-details-container">
                <div className="profile-details-left">
                    <img src={profile.avatar_url} alt="Foto do perfil" />
                </div>
                <div className="profile-details-right">
                    <h2>Informações</h2>
                    <div className="profile-details-text"><b>Perfil: </b> <span>{profile.html_url}</span></div>
                    <div className="profile-details-text"><b>Seguidores:</b> {profile.followers}</div>
                    <div className="profile-details-text"><b>Localidade:</b> {profile.location}</div>
                    <div className="profile-details-text"><b>Nome: </b> {profile.name}</div>
                </div>
            </div>
        </>
    );
}