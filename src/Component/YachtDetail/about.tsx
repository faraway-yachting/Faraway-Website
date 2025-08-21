import { Fragment } from "react"
import CharterDetail from "./charterDetail"
import { Yacht } from "../YachtDetail/hero";

type Props = {
    data: Yacht | null;
};
const About: React.FC<Props> = ({ data }) => {
    return (
        <Fragment>
            <CharterDetail data={data} />
        </Fragment>
    )
}
export default About