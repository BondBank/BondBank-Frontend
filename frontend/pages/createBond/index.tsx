import { Contract, ethers } from 'ethers';
import {
  CreateBondandAdminRole_CONTRACT_ABI,
  CreateBondandAdminRole_CONTRACT_ADDRESS,
} from '../../constants';
// import Link from 'next/link';
import { useEffect, useState } from 'react';
import Router from 'next/router';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

interface InputState {
  bondName: string;
  maxAmount: string;
}
interface DatePickerState {
  maturityDate: Dayjs | null;
  maturityDateWithTime: Dayjs | null;
}

const CreateBond = () => {
  const [txs, setTxs] = useState([]);
  const [signer1, setsigner1] = useState();
  const [bondId, setbondId] = useState('');

  const [inputValues, setInputValues] = useState<InputState>({
    bondName: '',
    maxAmount: '',
  });

  // set a specific date
  // dayjs('2014-08-18T21:11:54')
  const [datePickerValues, setDatePickerValues] = useState<DatePickerState>({
    maturityDate: dayjs(),
    maturityDateWithTime: dayjs(),
  });

  const handleInputChange =
    (prop: keyof InputState) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValues({ ...inputValues, [prop]: event.target.value });
    };

  const handleDatePickerChange =
    (prop: keyof DatePickerState) => (newValue: Dayjs | null) => {
      setDatePickerValues({ ...datePickerValues, [prop]: newValue });
    };

  async function learWeb3callCreateBondFunction1() {
    try {
      // If the caller has set the `contract` boolean to true, retrieve the balance of
      // ether in the `exchange contract`, if it is set to false, retrieve the balance
      // of the user's address
      let signer = '0x1d44EEDa66CFdD27189373d8B6d12eF9f549F3D5';

      // const exchangeContractProvider = new Contract(
      //     CreateBondandAdminRole_CONTRACT_ADDRESS,
      //     CreateBondandAdminRole_CONTRACT_ABI,
      //     signer
      //   );

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer12 = await provider.getSigner();
      //setsigner1(signer12);
      const signerAddr = await signer12.getAddress();
      console.log(`signer12---${signer12}`);
      console.log(`signerAddr---${signerAddr}`);

      const erc20 = new ethers.Contract(
        CreateBondandAdminRole_CONTRACT_ADDRESS,
        CreateBondandAdminRole_CONTRACT_ABI,
        signer12
      );

      if (true) {
        console.log('----');
        console.log(`bondName-${inputValues.bondName}`);
        console.log(`maxAmount-${inputValues.maxAmount}`);
        console.log(`maturityDate-${datePickerValues.maturityDate?.unix()}`);
        // console.log(`setBondunitPrice-${BondunitPrice}`);
        console.log(
          `maturityDateWithTime-${datePickerValues.maturityDateWithTime?.unix()}`
        );

        erc20.CreateBond(
          inputValues.bondName,
          // converting dayjs obj to unix timestamp in seconds (same as block.timestamp)
          datePickerValues.maturityDate?.unix(),
          '0xB3865282170A6CFF1132e92c0B62554cc3bcc39B',
          //BondunitPrice,
          // converting dayjs obj to unix timestamp in seconds (same as block.timestamp)
          datePickerValues.maturityDateWithTime?.unix()
        );
        let currentBond = 0;
        erc20.on(
          'BondCreated',
          (currentBondId, bondName, maturityDate, bondUnitPrice, event) => {
            console.log(`----`),
              console.log({
                currentBondId,
                bondName,
                maturityDate,
                bondUnitPrice,
                event,
              }),
              (currentBond = currentBondId);
            console.log('event');
            console.log(currentBondId.toString());
            console.log(bondName.toString());
            console.log(maturityDate.toString());
            console.log(bondUnitPrice.toString());
            console.log(event);
            console.log(`+++`);
            setbondId(currentBond.toString());
            return <h2>{currentBondId.toString()}</h2>;
          }
        );

        console.log(currentBond);
      } else {
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    console.log('bondName', inputValues.bondName);
    console.log('maxAmount', inputValues.maxAmount);
    console.log('maturityDate', datePickerValues.maturityDate?.unix());
    console.log(
      'maturityDateWithTime',
      datePickerValues.maturityDateWithTime?.unix()
    );

    // if(contractInfo.address !== "-"){
    //     const provider
    // }
    // const provider = new ethers.providers.Web3Provider(window.ethereum);
    // const signer1 = await provider.getSigner();
    // const erc20 = new ethers.Contract(CreateBondandAdminRole_CONTRACT_ADDRESS,CreateBondandAdminRole_CONTRACT_ABI,signer1);
    // erc20.on("BondCreated",(currentBondId, bondName,maturityDate,bondUnitPrice,event) => {
    //     console.log({currentBondId,  bondName,maturityDate,bondUnitPrice,event})
    // setBondMaximumUnits((currentTxs)=>[
    //     ...currentTxs,{
    //         txHash: event.transactionHash,
    //         from, to , amount: String(amount)
    //     }
    // ])
    // })
  });

  function goBackToManageBonds() {
    Router.push('/bondCreatorUI');
  }

  return (
    <div className="container">
      <h1>
        <a className="footer-text">Create Bond</a>
      </h1>
      <div>
        <label>Bond Name:</label>
        <TextField
          required
          size="small"
          id="bondName"
          label="Required"
          placeholder="set bond name"
          onChange={handleInputChange('bondName')}
        />
        <br />
      </div>
      <br />

      <br />
      <div>
        <label>Maturity Date with only date: </label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            inputFormat="MM/DD/YYYY"
            value={datePickerValues.maturityDate}
            onChange={handleDatePickerChange('maturityDate')}
            renderInput={(params) => (
              <TextField {...params} required label="Required" size="small" />
            )}
          />
        </LocalizationProvider>
        <br />
      </div>
      <br />
      <div>
        <label>Maturity Date with Time:</label>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateTimePicker
            value={datePickerValues.maturityDateWithTime}
            onChange={handleDatePickerChange('maturityDateWithTime')}
            renderInput={(params) => (
              <TextField {...params} required label="Required" size="small" />
            )}
          />
        </LocalizationProvider>
        <br />
      </div>
      <br />

      <div>
        {/*add validation to make this field required and should be with in range of $1000 to $100k*/}
        <label>Maximum Amount:</label>
        <TextField
          required
          size="small"
          id="maturityDateWithTime"
          label="Required"
          placeholder="set maximun amount"
          onChange={handleInputChange('maxAmount')}
        />
        <br />
      </div>
      <br />
      <div>
        <button
          className="cta-button connect-wallet-button"
          onClick={() => learWeb3callCreateBondFunction1()}
        >
          Create
        </button>
      </div>
      <br></br>
      <div>
        <button
          className="cta-button connect-wallet-button"
          onClick={() => goBackToManageBonds()}
        >
          Cancel
        </button>
      </div>
      <br></br>

      <div>
        <h2>{`Bondid '${bondId}' is created`}</h2>
      </div>
    </div>
  );
};

export default CreateBond;
