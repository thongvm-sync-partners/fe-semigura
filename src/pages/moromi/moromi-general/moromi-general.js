import { useDispatch, useSelector } from "react-redux";
import PageTable from "../../../components/page-table/page-table";
import {
  selectAllMoromis,
  updateMoromi,
} from "../../../store/moromi/moromiSlice";
import { memo } from "react";

function MoromiGeneral() {
  const dispatch = useDispatch();
  const data = useSelector(selectAllMoromis);
  const updateData = ({ id, changes }) => {
    dispatch(updateMoromi({ id, changes }));
  };
  const MemoizedPageTable = memo(PageTable);
  return <MemoizedPageTable data={data} updateData={updateData} />;
}

export default MoromiGeneral;
