package com.ui.controller.demo;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ui.model.demo.User;

/**
 * demo示例模块controller
 */
@Controller
@RequestMapping("/demo")
public class DemoController {

	/**
	 * 获得数据列表
	 */
	@RequestMapping("/selectList")
	@ResponseBody
	public Map<String, Object> selectList(HttpServletRequest request) {
		Map<String, Object> resultMap = new HashMap<String, Object>();
		Map<String, String[]> params = request.getParameterMap();
		int limit = request.getParameter("limit")==null?100:Integer.parseInt(request.getParameter("limit"));
		int offset = request.getParameter("offset")==null?0:Integer.parseInt(request.getParameter("offset"));
		
		List<User> list = new ArrayList<User>();
		for(int i=offset;i<offset+limit;i++) {
			User u = new User(""+i, "张三"+i, "18812341234", "研发人员", "研发部", new Date(), "181"+i);
			list.add(u);
		}
		resultMap.put("rows", list);
		resultMap.put("total", "100");
		return resultMap;
	}
	
}
