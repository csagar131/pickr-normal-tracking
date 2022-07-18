import React, { useEffect, useState } from "react";
import moment from "moment";
import { Divider, Steps } from "antd";
import { Timeline } from "antd";
import { CheckCircleFilled } from "@ant-design/icons";
import {
  Item,
  HeadingItem,
  TimelineContainer,
  Container,
  SmallItem,
} from "./style";
import { Color } from "../OrderInfoContainer/utils";
const TimelineComp = ({ trackArr }) => {
  const [currIndex, setCurrIndex] = useState(null);
  console.log(trackArr, "trackarr");

  const validStatuses = [
    "OP",
    "PP",
    "SHP",
    "OT",
    "OO",
    "DL",
    "OC",
    "NDR",
    "RTO",
  ];

  const STATUS_TIME =
    trackArr &&
    [trackArr[trackArr?.length - 1]?.status_array[0]][0]?.status_time;
  const STATUS_LOC =
    trackArr &&
    [trackArr[trackArr?.length - 1]?.status_array[0]][0]?.status_location;

  const arr = [
    {
      status_name: "OP",
      status_array: [
        {
          pickrr_status: "Order Placed",
          status_location: STATUS_LOC,
          status_time: STATUS_TIME,
        },
      ],
    },
    {
      status_name: "PP",
      status_array: [
        {
          pickrr_status: "Order Picked Up",
          status_location: STATUS_LOC,
          status_time: STATUS_TIME,
        },
      ],
    },
    {
      status_name: "SHP",
      status_array: [
        {
          pickrr_status: "SHIPMENT INSCAN",
          status_location: STATUS_LOC,
          status_time: STATUS_TIME,
        },
      ],
    },
    {
      status_name: "OT",
      status_array: [
        {
          pickrr_status: "Order in Transit",
          status_location: STATUS_LOC,
          status_time: STATUS_TIME,
        },
      ],
    },
    {
      status_name: "OO",
      status_array: [
        {
          pickrr_status: "Shipment out for delivery",
          status_location: STATUS_LOC,
          status_time: STATUS_TIME,
        },
      ],
    },
    {
      status_name: "DL",
      status_array: [
        {
          courier_status_code: "001-S",
          pickrr_status: "Delivered",
          status_location: STATUS_LOC,
          status_time: STATUS_TIME,
        },
      ],
    },
  ];

  const statusTobeShown = trackArr?.filter((o1) =>
    validStatuses.some((o2) => o1?.status_name === o2)
  );

  function getDifference(array1, array2) {
    return array1?.filter((object1) => {
      return !array2?.some((object2) => {
        return object1?.status_name === object2?.status_name;
      });
    });
  }

  const difference = [...getDifference(arr, statusTobeShown)];

  let parentArray = [...statusTobeShown, ...difference];
  const cancelStatusExists = () => {
    return (
      statusTobeShown &&
      statusTobeShown?.some(function (el) {
        return (
          el?.status_name === "OC" ||
          el?.status_name === "RTO" ||
          el?.status_name === "DL"
        );
      })
    );
  };
  const actualArray = cancelStatusExists()
    ? statusTobeShown && statusTobeShown
    : parentArray;

  return (
    <div>
      <Container lengt={statusTobeShown?.length}>
        {actualArray?.map((track, index) => {
          return (
            <Timeline.Item
              color={
                index > parentArray?.length - difference?.length - 1
                  ? "#EDF0F9"
                  : track?.status_name == "OC" || track?.status_name == "NDR"
                  ? Color(track?.status_name)
                  : "green"
              }
              key={index}
              dot={
                <div
                  style={{
                    height: "15px",
                    width: "15px",
                    borderRadius: "50%",
                    background:
                      index > parentArray?.length - difference?.length - 1
                        ? "#EDF0F9"
                        : track.status_name == "OC" ||
                          track.status_name == "NDR"
                        ? Color(track.status_name)
                        : "green",
                  }}
                ></div>
              }
              style={{
                cursor: track?.status_array?.length > 1 && "pointer",
              }}
              onClick={() => {
                if (track?.status_array?.length > 1) {
                  setCurrIndex(index);
                  // setShow(currIndex === index);
                }
              }}
            >
              <HeadingItem
                style={{
                  color:
                    index > parentArray?.length - difference?.length - 1
                      ? "#EDF0F9"
                      : "#2D3F93",
                }}
              >
                {track?.status_array[0]?.pickrr_status}{" "}
                <span style={{ color: "#EF7E00" }}>
                  {track?.status_array?.length > 1 && "(New Update)"}
                </span>
              </HeadingItem>
              <Item
                style={{
                  color:
                    index > parentArray?.length - difference?.length - 1
                      ? "#EDF0F9"
                      : "#2D3F93",
                }}
              >
                Last updated on{" "}
                {moment(track?.status_array[0]?.status_time).format(
                  "MMMM Do YYYY-hh:mm a"
                )}
              </Item>
              <Item
                style={{
                  color:
                    index > parentArray?.length - difference?.length - 1
                      ? "#EDF0F9"
                      : "#2D3F93",
                }}
              >
                {track?.status_array[0]?.status_location}
              </Item>
              {index === currIndex && track?.status_array?.length > 1 ? (
                <TimelineContainer
                  style={{ marginLeft: "-26px", marginTop: 15 }}
                >
                  {track?.status_array?.map((tracking, ind) => {
                    return (
                      <Timeline.Item
                        color="green"
                        key={ind}
                        dot={
                          <div
                            style={{
                              height: "10px",
                              width: "10px",
                              borderRadius: "50%",
                              background:
                                index >
                                parentArray?.length - difference?.length - 1
                                  ? "#EDF0F9"
                                  : track?.status_name == "OC" ||
                                    track?.status_name == "NDR"
                                  ? Color(track.status_name)
                                  : "green",
                            }}
                          ></div>
                        }
                      >
                        <SmallItem>{tracking?.pickrr_status} </SmallItem>
                        <SmallItem>
                          Last updated on{" "}
                          {moment(tracking?.status_time).format(
                            "MMMM Do YYYY-hh:mm a"
                          )}
                        </SmallItem>
                        <SmallItem>{tracking?.status_location}</SmallItem>
                      </Timeline.Item>
                    );
                  })}
                </TimelineContainer>
              ) : null}
            </Timeline.Item>
          );
        })}

        {/* <>
          <Steps
            progressDot
            current={statusTobeShown?.length - 1}
            direction="vertical"
          >
            {parentArray?.map((track, index) => {
              return (
                <>
                  <Step
                    key={index}
                    onClick={() => {
                      if (track.status_array.length > 1) {
                        setShow(!show);
                      }
                    }}
                    style={{
                      cursor: track.status_array.length > 1 && "pointer",
                    }}
                    description={
                      show && track?.status_array.length > 1 ? (
                        <>
                          <HeadingItem>
                            {track.status_array[0].pickrr_status}{" "}
                            <span style={{ color: "#EF7E00" }}>
                              {track.status_array.length > 1 && "(New Update)"}
                            </span>
                          </HeadingItem>
                          <Item>
                            {moment(track.status_array[0].status_time).format(
                              "MMMM Do YYYY"
                            )}
                          </Item>
                          <Item>{track.status_array[0].status_location}</Item>

                          <NestedStepper
                            progressDot
                            current={track?.status_array?.length}
                            direction="vertical"
                          >
                            {track?.status_array.map((tracking, index) => {
                              return (
                                <Step
                                  key={index}
                                  title={tracking.pickrr_status}
                                  description={
                                    <>
                                      <SmallItem>
                                        {moment(tracking.status_time).format(
                                          "MMMM Do YYYY"
                                        )}
                                      </SmallItem>
                                      <SmallItem>
                                        {tracking.status_location}
                                      </SmallItem>
                                    </>
                                  }
                                />
                              );
                            })}
                          </NestedStepper>
                        </>
                      ) : (
                        <Step
                          description={
                            <>
                              <HeadingItem>
                                {track.status_array[0].pickrr_status}{" "}
                                <span style={{ color: "#EF7E00" }}>
                                  {track.status_array.length > 1 &&
                                    "(New Update)"}
                                </span>
                              </HeadingItem>
                              <Item>
                                {moment(
                                  track.status_array[0].status_time
                                ).format("MMMM Do YYYY")}
                              </Item>
                              <Item>
                                {track.status_array[0].status_location}
                              </Item>
                            </>
                          }
                        ></Step>
                      )
                    }
                  />
                </>
              );
            })}
          </Steps>
        </> */}
      </Container>
    </div>
  );
};
export default TimelineComp;
