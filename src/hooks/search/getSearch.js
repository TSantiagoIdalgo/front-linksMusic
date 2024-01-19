import { getFrameRequest, getFrame, getFrameFailure } from "../state/features/music/frameSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const useFrame = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    function requestFrame(item) {
        dispatch(getFrameRequest());
        try {
            if (!item) throw new Error("No item provided");
            dispatch(getFrame(item));
            navigate('/musicplayer/frame')
        } catch (error) {
          dispatch(getFrameFailure(error.message));
        }
    }

    return { requestFrame };
}