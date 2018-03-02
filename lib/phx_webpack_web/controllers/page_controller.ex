defmodule PhxWebpackWeb.PageController do
  use PhxWebpackWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
