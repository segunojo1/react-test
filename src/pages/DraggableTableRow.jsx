import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

const DraggableTableRow = ({ video, index, moveItem }) => {
    // const [{ isDragging }, drag] = useDrag({
    //     type: 'ROW',
    //     item: {type: 'ROW', index, video},
    //     collect: (monitor) => ({
    //         isDragging: monitor.isDragging(),
    //     }),
    // });
    const ItemTypes = {
        ITEM: 'item',
      };

    const [, drag] = useDrag({
        type: ItemTypes.ITEM,
        item: { index },
      });
    
      const [, drop] = useDrop({
        accept: ItemTypes.ITEM,
        hover: (draggedItem) => {
          if (draggedItem.index !== index) {
            moveItem(draggedItem.index, index);
            draggedItem.index = index;
          }
        },
      });

    return (
        <tr
        ref={(node) => drag(drop(node))}
            className={`border-t border-custom-color1 cursor-pointer transition delay-100 hover:bg-white-200 py-4 border-[1px] border-[#696969] rounded-[10px] `}
        >
            <td className="max-w-[10vw] md:full tracking-wide font-manropeL text-base text-white px-6 py-6">
               {video.id}
                <div className="flex gap-[16px]">
                    <img src={video.photo} alt="video" className="w-[118px] h-[64px] rounded-[8px]" />
                    {video.title}
                </div>
            </td>
            <td className="tracking-wide font-manropeL text-base text-white px-6 py-6 text-center">
            {video.username} 
            </td>
            <td className="hidden md:table-cell tracking-wide font-manropeL text-base text-gray-900 px-6 py-6 text-center">
                <p className="text-[#FFFFFF]">{`#${video.like}`}</p>
            </td>
        </tr>
    );
};

export default DraggableTableRow;