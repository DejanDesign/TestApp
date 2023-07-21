import React, { useState } from 'react';
import './CampaignList.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch , faCheckCircle , faTimesCircle } from '@fortawesome/free-solid-svg-icons';

interface Campaign {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  Budget: number;
  active: boolean;
}

interface CampaignListProps {
  campaigns: Campaign[];
}

const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

/*   const handleStartDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(event.target.value);
  }; */
  
  

  const filterCampaigns = (campaign: Campaign) => {
    const campaignStartDate = new Date(campaign.startDate);
    const campaignEndDate = new Date(campaign.endDate);
    const selectedStartDate = new Date(startDate);
    const selectedEndDate = new Date(endDate);
  
    return (
        campaign.name.toLowerCase().startsWith(searchTerm.toLowerCase()) &&
        (startDate === '' ||
          campaignStartDate.getTime() >= selectedStartDate.getTime()) &&
        (endDate === '' || campaignEndDate.getTime() <= selectedEndDate.getTime())
      );
  };
  

  const filteredCampaigns = campaigns.filter(filterCampaigns);

  return (
    <div className="campaign-list">
      <div className="filter-form">
        <div className='input-search'>
          <input
              className='filter-name'
              type="text"
              placeholder="Search by name"
              value={searchTerm}
              onChange={handleSearchChange}
          /> <FontAwesomeIcon icon={faSearch} />
        </div>
       {/*  <input
            className='filter-data'
            type="date"
            placeholder="Start Date"
            value={startDate}
            onChange={handleStartDateChange}
        />
        <input
            className='filter-data'
            type="date"
            placeholder="End Date"
            value={endDate}
            onChange={handleEndDateChange}
            disabled={startDate === ''}
        /> */}
        <DatePicker
            className='filter-data'
            dateFormat="yyyy/MM/dd"
            selected={startDate ? new Date(startDate) : null}
            onChange={(date: Date) => setStartDate(date.toISOString().split('T')[0])}
            placeholderText="Start Date"
        />
        <DatePicker
            className='filter-data'
            dateFormat="yyyy/MM/dd"
            selected={endDate ? new Date(endDate) : null}
            onChange={(date: Date) => setEndDate(date.toISOString().split('T')[0])}
            placeholderText="End Date"
            disabled={startDate === ''}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Active</th>
            <th>Budget (USD)</th>
          </tr>
        </thead>
        <tbody>
          {filteredCampaigns.map((campaign) => (
            <tr key={campaign.id}>
              <td>{campaign.name}</td>
              <td>{campaign.startDate}</td>
              <td>{campaign.endDate}</td>
              <td className='active-inactive'>
                   {/* {campaign.active &&
    new Date(campaign.startDate) <= new Date() &&
    new Date(campaign.endDate) >= new Date()
        ? 'Active'
        : 'Inactive'}  */}
        {campaign.active ? (
        <>
            <FontAwesomeIcon icon={faCheckCircle} className="active-icon" /> Active
        </>
    ) : (
        <>
            <FontAwesomeIcon icon={faTimesCircle} className="inactive-icon" /> Inactive
        </>
    )}
              </td>
              <td>{campaign.Budget} $</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignList;
