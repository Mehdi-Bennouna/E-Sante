import style from './style.module.css';
import SignInCard from '../../components/SignInCard';

export default function Auth() {
    return (
        <div className={style.Auth}>
            <SignInCard />
        </div>
    );
}
