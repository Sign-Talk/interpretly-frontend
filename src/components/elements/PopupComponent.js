import React from "react";
import { Modal } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { centralStyle } from "./centralStyle";
import { useSelector, useDispatch } from 'react-redux'
import { setmodalState, setClicked} from '../../redux/Actions/HeroActions'

export const PopupComponent = ({
  Header = "Basic",
  Content = <> </>,
  ...rest
}) => {

  const dispatch = useDispatch()
  const heroState = useSelector(state => state.HeroState)
  // const [open, setOpen] = useState(false);
  return (
    <Modal
      onClose={() => rest.setpopUpClicked(false)}
      onOpen={() =>rest.setpopUpClicked(true)}
      open={rest.popupClicked}

      // onClose={() => {
      //   dispatch(setmodalState(false))
      //   dispatch(setClicked(""))
      // }}
      // onOpen={() => {
      //   dispatch(setmodalState(true))
      //   dispatch(setClicked("right"))
      // }}
      // open={heroState.clicked}
      style={centralStyle.ModalLogin}
      dimmer={"blurring"}
    >
      <Modal.Content style={{ backgroundColor: "transparent" }}>
        {Content}
      </Modal.Content>
    </Modal>
  );
};
