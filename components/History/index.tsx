import { Button, Group, ScrollArea, Text } from "@mantine/core";
import useGetHistory from "../../queries/useGetHistory";
import HistoryImage from "./HistoryImage";

export default function History() {
  const { data: historyData } = useGetHistory();

  function onDeleteAll() {
    localStorage.removeItem("history");
  }
  return (
    <>
      {historyData && historyData.length > 0 && (
        <>
          <Group position="left">
            <Text>History</Text>
            <Button radius="md" size="xs" color="red" onClick={onDeleteAll}>
              Delete All
            </Button>
          </Group>
          <ScrollArea style={{ height: 132 }}>
            {historyData.map((x, i) => {
              return <HistoryImage key={i} index={Number(i)} historyData={x} />;
            })}
          </ScrollArea>
        </>
      )}
    </>
  );
}
