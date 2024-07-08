import { ProfileDataResponse } from '../interface/interface';

export async function fetchData(id: string | undefined): Promise<ProfileDataResponse> {
    let response = await fetch(`http://localhost:3000/user/${id}`);
    let data = await response.json();
    return data;
}


// create an interface for this

/**
 * 
 *   const Footer: FC<FooterProps> = ({ location, website }) => {
        return (<>
            <p style={{ fontSize: "11.5px", position: "relative", top: "45.5px" }}>{location}</p>
            <p style={{ fontSize: "11.5px", position: "relative", top: "38.5px" }}>{website}</p>
        </>
        )
    }
 
const CreateCard: FC<CreateCardProps> = ({props}: any) => {
        return <Card
            className='card'
            header={props.img}
            title={title}
            subTitle={header}
        >
            <Text />

            <div className='buttons-container'>
                <div className="button-1">
                    <Button label="View CV" className='button-style' />
                </div>
                <div className="button-2">
                    <Button label="Message" className='button-style' />
                </div>
            </div>
        </Card>
    }

    const Text: FC = () => {
        return (<><p className="profile-biography">
            I'm a talented and very creative chatabox with over 10 years
            of experience in talking, communicating and expressing
            my thoughts with my peers. Even when they've had an
            earful for over an hour I can still Rizz my way to a
            successful conversation. </p>

            <p style={{ fontSize: "11.5px", position: "relative", top: "45.5px" }}>London UK</p>
            <a style={{ fontSize: "11.5px", position: "relative", top: "27.5px" }}>www.johnItalkalot.com</a>
        </>
        )
    }

    const profileImage = (img: any) =>
        <div className="img-cover">
            <img src={img} className="rounded profile-image" alt="profile" />
        </div>

    const title = <span>
        <h4 className="title child-element-margin"> Jack ITalkAlot </h4>
    </span>;

    const header = <span>
        <p className="header child-element-margin"> @JackITalkAlot </p>
    </span>;
{/**
    const Footer: FC<FooterProps> = ({ location, website }) => {
        return (<>
            <p style={{ display: "flex", fontSize: "13.5px", position: "relative", top: "-165.5px", left: "525px" }}>{location}</p>
            <a href={website} style={{display: "flex", fontSize: "13.5px", position: "relative", top: "-170.5px", left: "495px" }}>{website}</a>
        </>
        )
    }

    

 */