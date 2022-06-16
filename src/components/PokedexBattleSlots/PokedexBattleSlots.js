import React, { useState } from 'react';
import {
  PokedexBattleSlotStyled,
  PokedexBattleSlotBox,
  PokedexBattleFinish,
} from './PokedexBattleSlotsStyled';
import versus from '../../assets/vs.png';
import { BeginBattleStyled } from '../ActionButtons/ActionButtonsStyled';

const PokedexBattleSlots = (props) => {
  const battleSlot1 = props.battleSlot1;
  const battleSlot2 = props.battleSlot2;
  const [battleWinner, setBattleWinner] = useState('');
  const [winImage, setWinImage] = useState(false);

  var slot1 = battleSlot1 && (
    <div>
      <p>{battleSlot1.name.toUpperCase()}</p>
      <img src={battleSlot1.sprites.front_default} alt="Pokemon Sprite" />
    </div>
  );

  var slot2 = battleSlot2 && (
    <div>
      <p>{battleSlot2.name.toUpperCase()}</p>
      <img src={battleSlot2.sprites.front_default} alt="Pokemon Sprite" />
    </div>
  );

  const beginBattle = () => {
    if (!battleSlot1 || !battleSlot2) {
      alert('Chosse 2 pokemon!');
    } else {
      var sumSlot1 = 0;
      var sumSlot2 = 0;

      for (var i = 0; i < 6; i++) {
        sumSlot1 += battleSlot1.stats[i].base_stat;
        sumSlot2 += battleSlot2.stats[i].base_stat;
      }

      if (sumSlot1 > sumSlot2) {
        setBattleWinner(battleSlot1.name.toUpperCase());
      } else {
        setBattleWinner(battleSlot2.name.toUpperCase());
      }

      setWinImage(true);
      setTimeout(() => {
        setWinImage(false);
      }, 3000);
    }
  };

  const imageVersus = !winImage ? (
    <img src={versus} alt="Versus" />
  ) : (
    <PokedexBattleFinish>
      {battleWinner} <br /> WIN!
    </PokedexBattleFinish>
  );

  return (
    <>
      <PokedexBattleSlotStyled>
        <PokedexBattleSlotBox>{slot1}</PokedexBattleSlotBox>
        {imageVersus}
        <PokedexBattleSlotBox>{slot2}</PokedexBattleSlotBox>
      </PokedexBattleSlotStyled>
      <BeginBattleStyled onClick={beginBattle}>Battle</BeginBattleStyled>
    </>
  );
};

export default PokedexBattleSlots;
