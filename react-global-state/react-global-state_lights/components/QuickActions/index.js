import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({lights, allLightsOn, allLightsOff}) {
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          allLightsOff();
          // console.log("Turn all lights off");
        }}
        disabled={lights.every(light => !light.isOn)}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          allLightsOn();
          // console.log("Turn all lights on");
        }}
        disabled={lights.every(light => light.isOn)}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
