import styled from "@emotion/styled";
import { PlusCircleOutlined } from "@ant-design/icons";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 96px;
  border: 2px dotted #707070;
  border-radius: 10%;
`;
export const PlusIcon = styled(PlusCircleOutlined)`
  color: #707070;
  font-size: 30px;
`;
