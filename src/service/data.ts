import request from "@/utils/request";



export const uploadData = (data: any) => {
  return request.post('/datas/upload-csv/', data);
};

export const getDatas = () => {
  return request.get('/datas/list/');
};

export const getFileData = (id: string) => {
  return request.get(`/datas/detail/${id}/`);
};

// 获取算法
export const getAlgorithms = () => {
  return request.get('/algorithms/list/');
};
