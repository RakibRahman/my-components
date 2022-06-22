import React, { useState } from 'react'
import { MainPage } from './MainPage'
import { Page } from './Page'
import { Card } from './Card'
export const Composition = () => {
    const [count, setCount] = useState(0);
    // composition reduces prop drilling
    return (
        <div>Composition
            <MainPage>
           <h4>     {count}</h4>
                <Page>
                  <h4>  {count}</h4>
                    <Card title="Card One" id="cardOne" body='Hello'>
                     <h4>   {count}</h4>
                        <button onClick={() => setCount((count) => count + 1)}>
                            Increase
                        </button>
                    </Card>
                </Page>
            </MainPage>
        </div>
    )
}
