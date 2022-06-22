import { FC } from 'react'

import { Header } from '../../components';
import SimpleSlider from '../../helpers/Slider/Slider';

const Catalog: FC = (): JSX.Element => {
    return (
        <>
            <Header />
            <div>
                <SimpleSlider>
                    <div className="">
                        .
                    </div>
                    <div className="">
                        2
                    </div>
                </SimpleSlider>
            </div>
        </>
    )
}

export default Catalog;