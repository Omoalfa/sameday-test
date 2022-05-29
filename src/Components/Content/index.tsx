import './content.css'

import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Item from "./ContentItem";
import ContentNav from "./ContentNav";

const Content: React.FC = () => {
    const [popular, setPopular] = useState([]);
    const [wings, setWings] = useState([]);
    const [trays, setTrays] = useState([]);

    const fetData = async (url: string, type: 'popular' | 'wing' | 'tray') => {
        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })

        try {
            switch (type) {
                case 'popular':
                    setPopular(await response.json());
                    break;
                case 'tray':
                    setTrays(await response.json());
                    break;
                case 'wing':
                    setWings(await response.json());
                    break;
                default:
                    break;
            };
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetData('popular.json', 'popular');
        fetData('wings.json', 'wing');
        fetData('trays.json', 'tray');
    }, [])

    return (
        <div className="content">
           <ContentNav />
           <Item title="Popular Items" subtitle="The most commonly ordered items and dishes from this store" data={popular} />
           <Item title="Wings & Tenders" subtitle="Comes with fries" data={wings} />
           <Item title="Party Trays" subtitle="" data={trays} />
        </div>
    )
} 

export default Content;
