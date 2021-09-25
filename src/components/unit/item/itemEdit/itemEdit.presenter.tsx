import {
  Wrapper,
  AddItem,
  ItemContainerEdit,
  ItemCreateInput,
  ItemCreateBtn,
} from "./itemEdit.styles";

import MicroButton from "../../../commons/button/micro.Button";
import { ChangeEvent, Dispatch, RefObject, SetStateAction } from "react";

interface Iprops {
  onChangeItemTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddItem: () => void;
  isAdd: boolean;
  setIsAdd: Dispatch<SetStateAction<boolean>>;
  inputRef: RefObject<HTMLInputElement>;
  colorCode: string;
}

export default function ItemEditUI(props: Iprops) {
  return (
    <>
      {props.isAdd ? (
        <div>
          <Wrapper>
            <ItemContainerEdit color={props.colorCode}>
              <ItemCreateInput
                onChange={props.onChangeItemTitle}
                maxLength={30}
                ref={props.inputRef}
              />
              <ItemCreateBtn>
                <MicroButton
                  buttonName="생성하기"
                  onClick={props.onClickAddItem}
                />
                <MicroButton
                  buttonName="취소하기"
                  onClick={() => props.setIsAdd(false)}
                />
              </ItemCreateBtn>
            </ItemContainerEdit>
          </Wrapper>
        </div>
      ) : (
        <AddItem onClick={() => props.setIsAdd(true)}>+ Add Item</AddItem>
      )}
    </>
  );
}
