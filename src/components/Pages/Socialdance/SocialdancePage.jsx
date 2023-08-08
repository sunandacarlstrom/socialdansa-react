import Search from "../../UI/Search/Search";
import SearchImage from "../../UI/Search/SearchImage";
import Image from "../../../assets/images/background/people-dancing.jpg";
import MainContent from "../../UI/MainContent/MainContent";

const Socialdance = () => {
    return (
        <>
            <SearchImage src={Image} alt="People are dancing"/>
            <MainContent>
                <Search />
            </MainContent>
        </>
    );
};

export default Socialdance;
