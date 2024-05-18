import React, { useCallback, useState, useEffect } from "react";
import "./Dashboard.css";
import { API_URL } from "../constants";
import clara from "../images/clara.png";
import DoubleChartComponent from "../Components/DoubleChartComponent/DoubleChartComponent";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [debt, setDebt] = useState(0);
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const [chartData, setChartData] = useState([]);
  const [secondChartData, setSecondChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  const fetchDebt = useCallback(async () => {
    try {
      const response = await fetch(
        `${API_URL}/averageDebt/${localStorage.getItem("userId")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      // Format debt to have two decimals and add comma if higher than 1000
      const formattedDebt = parseFloat(data.averageDebt).toLocaleString(
        "en-US",
        {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }
      );
      setDebt(formattedDebt);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchIncomeOutcome = useCallback(async () => {
    try {
      const response = await fetch(
        `${API_URL}/personal-info/average/${localStorage.getItem("userId")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      setIncome(data.averageIncome);
      setOutcome(data.averageOutcome);
    } catch (error) {
      console.error(error);
    }
  }, []);

  const fetchgetMonthlyPersonalInfo = useCallback(async () => {
    try {
      const response = await fetch(
        `${API_URL}/personal-info/monthly/${localStorage.getItem("userId")}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const data = await response.json();
      const labels = data.map((item) => item.startMonth);
      const values = data.map((item) => item.income);
      const values2 = data.map((item) => item.outcome);
      setChartLabels(labels);
      setChartData(values);
      setSecondChartData(values2);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchDebt();
    fetchIncomeOutcome();
    fetchgetMonthlyPersonalInfo();
  }, [fetchDebt, fetchIncomeOutcome, fetchgetMonthlyPersonalInfo]);

  function ParseNumber(number) {
    return parseFloat(number).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  }

  console.log("labels", chartLabels);
  console.log("values", chartData);
  console.log("values2", secondChartData);

  return (
    <>
      <div className="dashboard">
        <div className="topContainer">
          <div className="leftContainer">
            <div className="titleContainer">
              <p>Deuda</p>
            </div>
            <div className="valueContainer">
              <p className="valueText">
                $
                {debt.toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </p>
            </div>
          </div>
          <div className="centerContainer">
            <div className="titleContainer">
              <p>Ingresos</p>
            </div>
            <div className="valueContainer">
              <p className="valueText">${income}</p>
            </div>
          </div>
          <div className="rightContainer">
            <div className="titleContainer">
              <p>Egresos</p>
            </div>
            <div className="valueContainer">
              <p className="valueText">${outcome}</p>
            </div>
          </div>
        </div>
        <div className="bottomContainer">
          <div className="bottomLeftContainer">
            <div className="titleContainer">
              <p>Ingresos y Egresos Mensuales</p>
            </div>
            <DoubleChartComponent
              datasets={[
                {
                  data: chartData,
                  label: "Ingreso",
                  borderColor: "#5B57F4",
                  backgroundColor: "#5B57F4",
                },
                {
                  data: secondChartData,
                  label: "Egreso",
                  borderColor: "#F457D1",
                  backgroundColor: "#F457D1",
                },
              ]}
              labels={chartLabels}
              chartType="bar" // You can change the chart type as needed
              graphTitle="Ingreso Mensual vs Egreso Mensual"
              cName="monthly-chart" // Optional custom class name for styling
            />
          </div>
          <div className="bottomRightContainer">
            <div className="botLeftContainer">
              <div className="adContainer">
                <p>¿Necesitas ayuda?</p>
              </div>
              <Link to="/assistant">
                <div className="chatButton">Charlemos</div>
              </Link>
            </div>
            <div className="botRightContainer">
              <div className="imgContainer">
                <img src={clara} alt="clara" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/*

                      $
                      {income.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}

                      $
                      {outcome.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}

                    <ChartComponent
                      data={chartData}
                      labels={chartLabels}
                      graphTitle="Sample Chart"
                      isFilled={true}
                      chartType="line"
                    />

*/
