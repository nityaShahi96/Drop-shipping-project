import Checkbox from "@mui/material/Checkbox";
const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CategoryCard = () => {
  return (
    <div className="">
      <div className="bg-gray-200 rounded-lg shadow-lg p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-black rounded-full h-11 w-11"></div>
            <div className="text-lg">Supplier</div>
          </div>
          <div>
            <Checkbox {...label} />
          </div>
        </div>
        <div className="text-gray-600 pt-3">
          cxjnjdc dcnsjndcosjdc kjdcnjosncd kjnzcjosnd kjzndc <br />
          jknscjsoidcj lzdcoisd kjzdcnjsd
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
