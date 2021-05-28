import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.less';
import { Button, Card, Divider } from "antd";
import styled from "@emotion/styled";

const apiUrl = process.env.REACT_APP_API_URL;

function App() {
    useEffect(() => {
        console.log("apiUrl::", apiUrl);
    })

    // const a = (b: Parameters<typeof useEffect>)=>{
    //
    // }
    //
    // type b = Parameters<typeof useEffect>;
    // const xiaoMing: Partial<Person> = {name: "liu"}

    type Person = {
        name:string,
        age:number
    }

    type keyTe = keyof Person;

    return (
        <Container>

            <ShadowCard>
                <Divider />
                <Button type={"link"} onClick={() => {
                    console.log("Button click=>")
                }}>
                    {"没有账号？注册新账号"}
                </Button>
            </ShadowCard>
        </Container>
    );
}

export default App;

const ShadowCard = styled(Card)`
  width: 40rem;
  min-height: 56rem;
  padding: 3.2rem 4rem;
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

